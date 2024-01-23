import React from 'react'
import H1 from '../../components/headings/H1'
import H2 from '../../components/headings/H2'
import H3 from '../../components/headings/H3'
import PSm from '../../components/paragraphs/P_Sm'
import { Link } from 'react-router-dom'

const Diversity = () => {
  return (
    <div className='p-4 '>
        <H2 styles={''}>Student Diversity Self-ID Questionnaire</H2>
        <div className='border p-2'>
        <H1>DIVERSITY SELF-IDENTIFICATION</H1>
        
        <br />
        <H3>Notice Of Collection</H3>
        <br />
        <PSm styles={'whitespace-pre-line'}>
        Equity, diversity and inclusion are fundamental values at Toronto Metropolitan University (TMU). The TMU Student Diversity Self-Identification (DSID) survey supports these values by helping us to better understand the diversity of our student population and develop programs and initiatives that help increase the representation of students from equity deserving groups, as well as the success and inclusion of our students. TMU is committed to identifying and eliminating barriers, and encourages participation from all members of our student community. </PSm>
        <br />
        
        <PSm>You can visit the <Link to={'/'} className='text-color3 underline '>Student Diversity Self-ID website</Link> for more information about why self-identifying is important as well as questions and answers about terminology and more. 
        <br />
        <br />
        <PSm>
        Self-identification is completely voluntary as there is a “Prefer not to answer” option to every question. You may update or change any responses you provide at any time.  </PSm>
        <br />
        <PSm>Your personal information is collected under the authority of the<Link to={'/'} className='text-color3 underline '> Toronto Metropolitan University Act, 1977 (amended)</Link> and in accordance with the <Link to={'/'} className='text-color3 underline '> Toronto Metropolitan University Notice of Collection</Link>.  Personal information is collected from this survey for the purposes set forth in this survey and the purposes outlined in the <Link to={'/'} className='text-color3 underline '> Toronto Metropolitan University Notice of Collection</Link>, including equity, diversity and inclusion initiatives and related purposes.</PSm>
        <br />
        <PSm>The University may contact you based on your response to the survey, including to provide you with information about TMU programs, initiatives, supports, services, events, opportunities and related purposes.  </PSm>
        <br />
        <PSm>The University is required to disclose certain personal information to the Ministry of Colleges and Universities (the “Ministry”) under section 15 of the Ministry of Training, Colleges, and Universities Act, RSO 1999, Chapter M19, as amended.  For example, the University must report personal information such as Ontario Education Numbers, student characteristics, and educational outcomes to the Ministry. The Ministry collects this data for purposes such as planning, allocating and administering public funding to colleges, universities and other post-secondary educational and training institutions and to conduct research and analysis, including longitudinal studies, and statistical activities conducted by or on behalf of the ministry for purposes that relate to post-secondary education and training.</PSm>
        <br />
        <PSm>The University will collect, use, disclose and protect your personal information in accordance with the Freedom of Protection and Privacy Act.</PSm>
        <br />
        <PSm>If you have questions about the collection, use and disclosure of this information by Toronto Metropolitan University, please contact the Office of the Vice-President, Equity and Community Inclusion via email (equity@torontomu.ca), telephone (416-979-5379) or mail (350 Victoria Street, JOR-1112, Jorgenson Hall, Toronto, ON M5B 2K3).</PSm>

        </PSm>
        <br />
        <PSm>INSTRUCTIONS
        <br />
Please read each question carefully and select the response that you feel best applies to you. You may identify as a member of more than one equity group.
</PSm>
        <br />
        <PSm>ACKNOWLEDGEMENT</PSm>
        <label htmlFor="acknowledge ">
            <input className='p-8' type="radio" name="acknowledge" id="" />
        
I have read and understand the information provided to me in this Diversity Self-Identification Survey Notice of Collection pertaining to the University's collection, use, and disclosure of personal information.</label>
    <br />
    <button className='border border-color3 mt-4 rounded-lg hover:bg-color3 hover:text-color2 text-color3 px-8 py-2'><PSm>Continue</PSm></button>
    </div></div>
  )
}

export default Diversity