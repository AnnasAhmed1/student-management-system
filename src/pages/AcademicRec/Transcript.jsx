import React from 'react'

import PSm from '../../components/paragraphs/P_Sm'
import PMd from '../../components/paragraphs/P_Md'
import { Link } from 'react-router-dom'
const Transcript = () => {
  return (
    <div className='p-4 max-w-6xl'>
        <div className='px-4 '>
            <div className='border-b'>
        <PMd>Nehash Sayantharajah</PMd>
        <br />
        <PMd styles={'text-color3'}>Request Official Transcript</PMd>
        </div></div>
        <br />
        <PSm>
        An official transcript is a complete record of a student's academic history at the university, including all undergraduate, graduate, law and continuing education courses taken, grades earned, academic progress, honours and graduation information. The official transcript also displays admission to and withdrawal from programs of study and other credits granted towards a program. Courses dropped by the deadline without academic penalty do not appear on the official transcript. All official transcripts are complete and unabridged. Partial transcripts are not issued.
        <br />
        <br />
        Official transcripts are digital documents issued through <Link className='text-color3 underline'> MyCreds.ca</Link>, a platform used by post-secondary institutions from across Canada to share and verify credentials in a secure digital format.
        <br />
        <br />
        For complete details on official transcripts visit <Link className='text-color3 underline'>Official Transcripts</Link> . If you have questions, <Link className='text-color3 underline'>please contact the ServiceHub</Link> .
        <br />
        <br />
        <strong>Before Requesting Transcript</strong>
        <br /><br />
        <Link className='text-color3 underline'>View your unofficial transcript</Link> prior to requesting an official transcript to ensure that all the information required is on your transcript, including any expected grades, grade changes or appeal results.
        <br /><br />
        If you do not have a university email address, confirm that your personal (i.e. Business and Home) <Link className='text-color3 underline'> email address is up-to-date</Link>. An email confirming that your transcript is ready is sent to your university email address if you have one, and to your home email address if you do not.
        <br /><br />
        Clear outstanding <Link className='text-color3 underline'>Holds</Link> , if applicable. Holds are for outstanding fees and/or other obligations to the university, monetary or otherwise, and may prevent the release of transcripts. The Holds section of your Student Center on MyServiceHub will indicate if you have a Hold.
        <br />
        <br />



        <strong>How to Request Official Transcript</strong>
        <br /><br />
        <strong>Step 1. Order and Pay</strong>
        <br /><br />
 

        Order and pay for your transcript by selecting 'Continue' below.<Link className='text-color3 underline'> Visit MyServiceHub Support How to Request Official Transcripts for step-by-step instructions</Link>.
        <br /><br />

        Indicate when the transcript is required:
        <br />
        <ul className='list-disc px-5'>
            <li>
As Soon As Possible - Transcript will be released within one business day of completing your order.
</li><li>
After Fall//Winter/Spring Term Grades - Transcript will include final grades and standing for the term, and is normally released within two business days of the term grades being official.
</li>
<li>
After Spring/Fall Convocation - Transcript confirms graduation date and program, and is released following the date your degree is officially conferred.
</li>
</ul>
<br />


Indicate number of transcripts:
<br />
<ul className='list-disc px-5'>
    <li>
You will receive one Share Credit on MyCreds for each transcript purchased.
</li><li>
Each Share Credit allows you to share your transcript with one recipient.
</li>
</ul>
<br />
Pay for your transcript:
<br />
<ul className='list-disc px-5'>
    <li>
Each transcript (i.e. Share Credit) costs $20.
</li><li>
Payments can be made using Visa, Mastercard or AMEX credit card.
</li>
<li>
<strong>Payment is non-refundable.</strong> 
</li>
</ul>
<br />
<strong>Step 2. Share Transcript</strong>
<br /><br />

 

Transcripts are shared through the <Link className='text-color3 underline'>MyCreds Learner Portal</Link> .
<br /><br />

 

After you submit your transcript order, it will be processed and transmitted to MyCreds. Processing time is normally less than one business day.
<ul className='list-disc px-5'>
<li>
If your transcript includes activities prior to September 1984, add two additional business days for processing.
</li><li>
If you request your transcript to be issued after term grades are available, it will be processed after your term grades and standings are official.
</li><li>
If you request your transcript to be issued after convocation, it will be processed after your degree is officially conferred.
</li></ul><br />
Once your transcript is ready to share, an email confirmation from MyCreds will be sent to your university email address if you have one, and to your personal email address on record with the university if you do not. Note that you can access MyCreds without viewing the email notification..

 <br /><br />

Log into the <Link className='text-color3 underline'>MyCreds Learner Portal</Link> using your university username and password to view and share your transcript

        </PSm>
        <br />
        <div className='mx-auto text-center'>
        <button className='mx-auto py-1 px-4 bg-red-200  rounded'>Continue</button>
        <br />
        <br />
        <button className='py-1 px-4 bg-red-200  rounded'>Review Orders</button>
        </div>

    </div>
  )
}

export default Transcript