// Builds 10 distinct exams (10 MC + 5 Fill = 15 questions per exam => 150 questions per course)
// combining the hand-crafted questions with the course's structured concept-definition matrix
// so every option (A-E) has a 100% accurate scientific/ISG explanation.

export function buildTenTestsForCourse(baseCourse, testThemes, conceptGroups, extraFillItems) {
  // 1. Collect existing hand-crafted MC questions (25)
  const allMC = [...baseCourse.mcQuestions];

  // Deterministic PRNG so question order & options never shift between requests
  let seed = 17;
  const nextRand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  // 2. Pass 1: Direct Concept Questions (target.q -> options are o.opt)
  conceptGroups.forEach((group) => {
    const items = group.items;
    items.forEach((target, idx) => {
      if (!target.q || allMC.length >= 100) return;
      const others = items.filter((_, i) => i !== idx);
      const shuffledOthers = [...others].sort(() => nextRand() - 0.5).slice(0, 4);

      const correctPos = (allMC.length * 3 + idx) % 5;
      const optionObjs = [...shuffledOthers];
      optionObjs.splice(correctPos, 0, target);

      const options = optionObjs.map((o) => o.opt);
      const optionExplanations = optionObjs.map((o, oIdx) =>
        oIdx === correctPos ? `DOĞRU: ${o.desc}` : `${o.opt}: ${o.desc}`
      );

      allMC.push({
        q: target.q,
        options,
        answer: correctPos,
        explanation: target.desc,
        optionExplanations
      });
    });
  });

  // 3. Pass 2: Reverse-Definition Questions ("Hangisi [Kavram] için doğrudur?" -> options are o.desc)
  conceptGroups.forEach((group) => {
    const items = group.items;
    items.forEach((target, idx) => {
      if (allMC.length >= 100) return;
      const others = items.filter((_, i) => i !== idx);
      if (others.length < 4) return;
      const shuffledOthers = [...others].sort(() => nextRand() - 0.5).slice(0, 4);

      const correctPos = (allMC.length * 7 + idx) % 5;
      const optionObjs = [...shuffledOthers];
      optionObjs.splice(correctPos, 0, target);

      const options = optionObjs.map((o) => o.desc);
      const optionExplanations = optionObjs.map((o, oIdx) =>
        oIdx === correctPos
          ? `DOĞRU (${o.opt}): Bu ifade tam olarak "${o.opt}" kavramının mevzuat ve teknik karşılığıdır.`
          : `YANLIŞ — Bu açıklama "${o.opt}" kavramına aittir.`
      );

      allMC.push({
        q: `${group.groupName} kapsamında yer alan "${target.opt}" kavramı veya kuralı ile ilgili aşağıdaki teknik ifadelerden hangisi DOĞRUDUR?`,
        options,
        answer: correctPos,
        explanation: `"${target.opt}" kavramının doğru açıklaması: ${target.desc}`,
        optionExplanations
      });
    });
  });

  // 4. Pass 3: True/False Pairing Questions ("Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?") if still < 100
  conceptGroups.forEach((group) => {
    const items = group.items;
    items.forEach((target, idx) => {
      if (allMC.length >= 100) return;
      const others = items.filter((_, i) => i !== idx);
      if (others.length < 4) return;
      const shuffledOthers = [...others].sort(() => nextRand() - 0.5);
      const wrongPartner = shuffledOthers[0];
      const fourTrue = shuffledOthers.slice(1, 5);
      if (fourTrue.length < 4) return;

      const correctPos = (allMC.length * 5 + idx) % 5;
      const falseObj = {
        isFalsePair: true,
        label: `${target.opt} — ${wrongPartner.desc}`,
        exp: `DOĞRU CEVAP (YANLIŞ EŞLEŞTİRME): "${target.opt}" için verilen açıklama yanlıştır (verilen açıklama "${wrongPartner.opt}" kavramına aittir). Doğrusu: ${target.desc}`
      };
      const trueObjs = fourTrue.map((o) => ({
        isFalsePair: false,
        label: `${o.opt} — ${o.desc}`,
        exp: `Doğru bir eşleştirmedir: ${o.opt} kavramı doğru tanımlanmıştır.`
      }));

      const optionObjs = [...trueObjs];
      optionObjs.splice(correctPos, 0, falseObj);

      allMC.push({
        q: `${group.groupName} ile ilgili aşağıda verilen kavram ve teknik açıklama eşleştirmelerinden hangisi YANLIŞTIR?`,
        options: optionObjs.map((o) => o.label),
        answer: correctPos,
        explanation: falseObj.exp,
        optionExplanations: optionObjs.map((o) => o.exp)
      });
    });
  });

  // Ensure exactly 100 MC questions (10 per test x 10 tests)
  const finalMC = allMC.slice(0, 100);

  // 5. Collect existing hand-crafted Fill questions (15) + 35 extra Fill questions = 50 Fill questions
  const allFill = [...baseCourse.fillQuestions, ...extraFillItems].slice(0, 50);

  // 6. Partition into 10 distinct Tests (each test: 10 MC + 5 Fill = 15 Questions)
  const tests = testThemes.map((themeTitle, tIdx) => {
    const mcStart = tIdx * 10;
    const fillStart = tIdx * 5;
    const mcSlice = finalMC.slice(mcStart, mcStart + 10);
    const fillSlice = allFill.slice(fillStart, fillStart + 5);
    return {
      testId: tIdx + 1,
      title: `Test ${tIdx + 1}: ${themeTitle}`,
      shortTitle: `Test ${tIdx + 1}`,
      theme: themeTitle,
      mcStart,
      fillStart,
      mcQuestions: mcSlice,
      fillQuestions: fillSlice,
      wordBank: fillSlice
        .map((f) => f.answers[0])
        .sort((a, b) => a.localeCompare(b, 'tr'))
    };
  });

  return {
    ...baseCourse,
    badge: `10 Ayrı Test • ${finalMC.length + allFill.length} Soru`,
    tests,
    mcQuestions: finalMC,
    fillQuestions: allFill
  };
}
