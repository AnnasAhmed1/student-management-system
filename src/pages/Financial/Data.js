
import inquiry from '../../assets/document.svg'
import pdf from '../../assets/pdf.svg'
import charge from '../../assets/file-invoice-with-us-dollar.svg'
import bank from '../../assets/bank.svg'
import payment from '../../assets/money-coins.svg'
import refund from '../../assets/credit-card-refund.svg'
export const  AccountSidebar = [
    { heading: 'Account Inquiry', link: '/account', img:bank },
    
    { heading: 'Charges Due', link: '/account/charges-due', img:charge},
    { heading: 'Payment History', link: '/account/payment-history', img:payment },
    { heading: 'Refund Portal', link: '/account/refund-portal', img:refund },
    { heading: 'Fees/Enrollment Confirmation', link: '/account/fees-enrollment-confirmation', img:pdf },
    { heading: 'Account Statement', link: '/account/account-statement', img:pdf },
    { heading: 'Net Tuition Statement', link: '/account/net-tuition-statement', img:pdf },
    { heading: 'T2202 Inquiry', link: '/account/t2202-inquiry', img:inquiry },
    { heading: 'T4A Inquiry', link: '/account/t4a-inquiry', img:inquiry },
  ];

export const AccountInfo=[
  {
    id: 5021234,
    total: -300.41,

  }

]


export const TableData = [
  // Populate with your data
  {
    chargeType: 'Fees',
    accountNumber: 'FEE001',
    term: 'Winter 2024',
    balance: '-300.41 CAD',
  },
  {
    chargeType: 'Fees',
    accountNumber: 'FEE001',
    term: 'Winter 2024',
    balance: '-300.41 CAD',
  },
  {
    chargeType: 'Fees',
    accountNumber: 'FEE001',
    term: 'Winter 2024',
    balance: '-300.41 CAD',
  },
  {
    chargeType: 'Fees',
    accountNumber: 'FEE001',
    term: 'Winter 2024',
    balance: '-300.41 CAD',
  },
  {
    chargeType: 'Fees',
    accountNumber: 'FEE001',
    term: 'Winter 2024',
    balance: '-300.41 CAD',
  },
  {
    chargeType: 'Fees',
    accountNumber: 'FEE001',
    term: 'Winter 2024',
    balance: '-300.41 CAD',
  },
  // ...other rows
];