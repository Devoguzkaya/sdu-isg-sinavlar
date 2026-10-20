import { elektrikCourse } from './elektrik.js';
import { madenCourse } from './maden.js';
import { riskCourse } from './risk.js';
import { ilkyardimCourse } from './ilkyardim.js';
import { makineCourse } from './makine.js';
import { fkruCourse } from './fkru.js';

import { buildTenTestsForCourse } from './testBuilder.js';
import { elektrikTestThemes, elektrikConceptGroups, elektrikExtraFill } from './bank_elektrik.js';
import { madenTestThemes, madenConceptGroups, madenExtraFill } from './bank_maden.js';
import { riskTestThemes, riskConceptGroups, riskExtraFill } from './bank_risk.js';
import { ilkyardimTestThemes, ilkyardimConceptGroups, ilkyardimExtraFill } from './bank_ilkyardim.js';
import { makineTestThemes, makineConceptGroups, makineExtraFill } from './bank_makine.js';
import { fkruTestThemes, fkruConceptGroups, fkruExtraFill } from './bank_fkru.js';

export const COURSES = [
  buildTenTestsForCourse(elektrikCourse, elektrikTestThemes, elektrikConceptGroups, elektrikExtraFill),
  buildTenTestsForCourse(madenCourse, madenTestThemes, madenConceptGroups, madenExtraFill),
  buildTenTestsForCourse(riskCourse, riskTestThemes, riskConceptGroups, riskExtraFill),
  buildTenTestsForCourse(ilkyardimCourse, ilkyardimTestThemes, ilkyardimConceptGroups, ilkyardimExtraFill),
  buildTenTestsForCourse(makineCourse, makineTestThemes, makineConceptGroups, makineExtraFill),
  buildTenTestsForCourse(fkruCourse, fkruTestThemes, fkruConceptGroups, fkruExtraFill)
];
