import React from 'react'
import PSm from '../../components/paragraphs/P_Sm'

import H2 from '../../components/headings/H2'
import { Link } from 'react-router-dom'
import Switch from '../../components/Switch'
const ChangeCertificate = () => {
  return (
    <div className='p-4 max-w-6xl'>
        
        <H2>Change Certificate Reg/Trnsfr</H2>
        <br />
        <PSm ><strong>Certificate programs: how to register or transfer</strong></PSm>
        <br />
        <PSm ><strong className='underline'>General Information</strong></PSm>

        <br />
        <PSm>
        This site is for students who intend to register in a certificate program or transfer from one certificate program to a different certificate.  Successful registration in a certificate program will appear on your academic record (transcript).
        <br />
        <br />
        All students intending to graduate from a certificate program are required to be registered in the program and to maintain a minimum level of academic performance (as defined by Toronto Metropolitan University policies).  There is no fee for certificate program registrations.
        <br /><br />
        
Some certificate programs require an undergraduate degree, an interview, or pre-approval prior to admission to the certificate program.  Information about approval requirements is found in the certificate program’s description on the Chang School website at<Link className='text-color3 underline'> continuing.torontomu.ca</Link>. We recommend you check whether your certificate program has an approval requirement before proceeding.
        
        <br />
        <br />
        Students may be registered in only one certificate program at any one time. Successful registration in a certificate program will be confirmed via email to your university email address.
        <br />
        <br />
        <strong className='underline'>Information before you register</strong>
        <br /><br />
        <strong>Why should I register in a certificate?</strong>
        <br />
        You must register in your certificate program if you wish to graduate from that certificate.
        <br /><br />
        <strong>When can I register in a certificate program?</strong>
        <br />
        You can register in a certificate before you take the first course in the certificate program.
        <br /><br />
        <strong>Is there a fee to register in a certificate program?</strong>
        <br />
        There is no fee to register in a certificate or to transfer from one certificate to a different certificate.
        <br /><br />
        <strong>What happens if I take courses that apply to the certificate before I register in a certificate program?</strong>
        <br />
        You can transfer up to 50 percent of the applicable courses already taken to the certificate program when you register.  Fifty percent of the applicable courses must be taken after registering in the certificate program. Courses taken prior to registration in the certificate will not be included in the calculation of your certificate program grade point average. <span className='underline'> You must register in the certificate program prior to completing 50 percent of the courses applicable to the certificate.</span>
        <br /><br />
        <strong>How do I know if I need approval before registering in a certificate program?
</strong>
        <br />
        The description of the certificate program on<Link className='text-color3 '>The Chang School website </Link>will tell you if there are admission requirements, such as an undergraduate degree, an interview, or pre-approval. You will need to email The Chang School’s Client Service staff at <Link className='text-color3 '>ce@torontomu.ca</Link>  to request approval before proceeding to register in a certificate program. In your message, include the name of the certificate program and your reason for sending the email.
        <br /><br />
        <strong>When is my certificate cumulative grade point average (CGPA) calculated?</strong>
        <br />
        A program cumulative grade point average (CGPA) is calculated on a student’s record only after official registration in a certificate program. The CGPA is calculated based on the grade points earned and the course weights.

        <br /><br />
        <strong>Can I transfer from one certificate program to another?</strong>
        <br />
        You have an opportunity to transfer from one certificate program to another via MyServiceHub.  When you transfer from one certificate program to another, you are no longer registered in your previous certificate.

        <br /><br />
        <strong>Can an undergraduate student register in a certificate program?</strong>
        <br />
        Undergraduate (UGRD) full-time and part-time students may register in a certificate program.  You should be aware of any possible restrictions.  It is recommended that you refer to the <Link className='text-color3 '>Curriculum Advising website</Link>   for a complete list of certificate restrictions.  Also, 50 percent of the courses used for certificate graduation must be completed through Continuing Education.

        <br /><br />
       
    
        <div className='flex gap-x-2' >
            <Switch/> 
            <PSm> I understand that registering in a certificate program indicates that I accept Toronto Metropolitan University’s policies and procedures as outlined on The Chang School website.</PSm>
        </div>
        <br />
       
        <strong className='underline'>Instructions for completing a certificate registration</strong><br />
        If you wish to register in a certificate program, review these instructions before selecting ‘Register in a certificate program’ and clicking on Continue.
        <br />
        <br />
        <ul className='list-decimal px-5'>
            <li>
            Your registration will take effect for the term that appears on the ‘Register in a certificate program’ page.
</li><li>
Use the look-up box to view the list of certificate programs and click on your selection.
</li>
<li>
If an approval code is required, have it ready as you will be required to enter it now.
</li>
<li>
When you are ready to complete your registration in your selected certificate program, click the Submit button.
</li>
</ul>
<br />
        <strong className='underline'>Instructions for completing a transfer to a different certificate</strong><br />
        If you wish to transfer out of your current certificate into a different certificate program, please review the following steps before selecting 'Transfer to a different certificate program' and clicking on Continue. If you plan to graduate from your previous certificate, apply to graduate from that certificate before starting.

        <br />
        <br />
        <ul className='list-decimal px-5'>
            <li>
            The name of your previous certificate program and the term and year will appear on the 'Transfer to a different certificate program' page. Your transfer will take effect for the term that appears.
</li><li>
Use the look-up box to view the list of certificate programs and click on your selection.
</li>
<li>
If an approval code is required, have it ready as you will be required to enter it now.
</li>
<li>
When you are ready to complete your transfer from your previous certificate program to your new program, click the Submit button
</li>
</ul>
<br />




        </PSm>
        <br />
        <div className='mx-auto  '>
        <label htmlFor="radio1">
            <input type="radio" name="radio1" id="" />
            Register in a certificate program
        </label> <br />
        <label htmlFor="radio2">
            <input type="radio" name="radio2" id="" />
            Transfer to a different certificate program
        </label><br />
        <button className='hover:bg-color3 my-4 text-color3 hover:text-white border border-color3 py-2 px-8 rounded'>Continue</button>
        <br />
        <br />

        </div>

    </div>
  )
}

export default ChangeCertificate