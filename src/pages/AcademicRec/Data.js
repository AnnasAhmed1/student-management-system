
import swap from '../../assets/swap_arrows.png'
import graduate from '../../assets/apply_for_graduation.png'
import transcript from '../../assets/transcript.png'
import grade from '../../assets/certificate-badge.svg'
import course from '../../assets/pencil-report-writing.svg'
import graph from '../../assets/graphic-chart.svg'
import envelope from '../../assets/envelope-open-text.svg'
import test from '../../assets/test_summary.png'
import doc from '../../assets/document-edit.svg'
import approve from '../../assets/approval.455x512.png'
export const AcademicSidebar = [
    {img: course , heading: 'Course History', link: '/academic/course-history' },
    {img: grade , heading: 'View Grades', link: '/academic/grades' },
    {img: transcript , heading: 'View Unofficial Transcript', link: '/academic/view-unofficial-transcript' },
    {img: graph , heading: 'View My Assessment Report', link: '/academic/view-assessment-report' },
    {img: doc, heading: 'Probationary Contracts', link: '/academic/probationary-contracts' },
    {img: transcript , heading: 'Request Official Transcript', link: '/academic/request-transcript' },
    {img: envelope , heading: 'Request A Letter', link: '/academic/request-a-letter' },
    {img: swap , heading: 'Change Certificate Program', link: '/academic/change-certificate' },
    {img: swap , heading: 'Change Plan/Major', link: '/academic/change-plan' },
    {img: test , heading: 'Test Score Summary', link: '/academic/test-score-summary' },
    {img: doc , heading: 'Evaluate My Transfer Credit', link: '/academic/evaluate-transfer-credit' },
    {img: approve , heading: 'View My Transfer Credit Report', link: '/academic/view-transfer-credit-report' },
    {img: graduate , heading: 'Apply For Graduation', link: '/academic/apply-graduation' },
    {img: swap , heading: 'Select Minor', link: '/academic/select-minor' },
    {img: graduate, heading: 'View My Graduation Status', link: '/academic/view-graduation-status' }
  ];
  


export const termData = [
    {
      term: 'Fall 2023',
      status: 'Undergraduate',
      link:'viewgrades'

    },
    {
      term: 'Summer 2023',
      status: 'Undergraduate',
      link:'viewgrades'
    },
    {
      term: 'Fall 2023',
      status: 'Undergraduate',
      link:'viewgrades'
    },
    // ...other terms
  ];

