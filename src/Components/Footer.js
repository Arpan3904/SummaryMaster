import React from 'react'
import '../Components/styles/myStyles.css'
import footer1 from '../Components/images/footer1.png'
import footer2 from '../Components/images/footer2.png'
import footer3 from '../Components/images/footer3.png'
import footer4 from '../Components/images/footer4.png'
import people from '../Components/images/people.png'
import institute from '../Components/images/institute.png'
import journalist from '../Components/images/journalist.png'
import teacher from '../Components/images/teacher.png'
import writer from '../Components/images/writer.png'
import student from '../Components/images/student.png'
import DoneIcon from '@mui/icons-material/Done';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='green-button'>Attain concise understanding</div>
            <div className='footer-header'>Single platform, endless summaries</div>
            <div className='footer-desc'><div>Transforming information overload into manageable insights — consistently striving</div><div className='extra'>for clarity.</div></div>
            <div className='footer'>
                <div className='footer1'>
                    <div className='footer1-left'>
                        <div className='footer-blue'>Condense & Comprehend: Summarization Simplified</div>
                        <div className='ft-head'>100% Automatic Article Summarization with just a click</div>
                        <div className='ft-desc'>In the sheer amount of information that bombards Internet users from all sides, hardly anyone wants to devote their valuable time to reading long texts. Summary Master's clever AI analyzes any piece of text and summarizes it automatically, in a way that makes it easy for you to read, understand and act on.</div>
                    </div>
                    <div className='footer1-right'>
                        <img src={footer1} alt='footer1'></img>
                    </div>
                </div>
                <div className='footer2'>
                    <div className='footer2-left'>
                        <img src={footer2} alt='footer2'></img>
                    </div>
                    <div className='footer2-right'>
                        <div className='footer-blue'>Essentials Unveiled: Metadata Extraction Simplified</div>
                        <div className='ft-head'>Article Metadata Extraction</div>
                        <div className='ft-desc'>Summary Master, the online article summarizer tool, not only condenses lengthy articles into shorter, digestible content, but it also automatically extracts essential metadata such as author and date information, related images, and the title. Additionally, it estimates the reading time for news articles and blog posts, ensuring you have all the necessary information consolidated in one place for efficient reading.</div>
                        <div>
                            <div className='footer-done'><DoneIcon style={{color:"green"}}/>Automated author-date extraction</div>
                            <div className='footer-done'><DoneIcon style={{color:"green"}}/>Related images consolidation</div>
                            <div className='footer-done'><DoneIcon style={{color:"green"}}/>Instant reading time estimation</div>
                        </div>
                    </div>
                </div>
                <div className='footer1'> 
                    <div className='footer1-left'>
                        <div className='footer-blue'>Pure Focus, No Fuss: Your Ad-Free Reading Haven</div>
                        <div className='ft-head'>Distraction and ad-free reading</div>
                        <div className='ft-desc'>As an efficient article summarizer tool, Summary Master meticulously eliminates ads, popups, graphics, and other online distractions, providing you with a clean, uncluttered reading experience. Moreover, it enhances your focus and comprehension by presenting the essential content in a concise and straightforward manner, thus transforming the way you consume information online.</div>
                    </div>
                    <div className='footer1-right'>
                        <img src={footer3} alt='footer3'></img>
                    </div>
                </div>
                <div className='footer2'>
                    <div className='footer2-left'>
                        <img src={footer4} alt='footer4'></img>
                    </div>
                    <div className='footer2-right'>
                        <div className='footer-blue'>Dodge the Distraction, Embrace the Essence</div>
                        <div className='ft-head'>Avoid the Clickbait Trap</div>
                        <div className='ft-desc'>Summary Master smartly selects the most relevant points from a text, filtering out weak arguments and baseless speculation. It allows for quick comprehension of the essence, without needing to sift through all paragraphs. By focusing on core substance and disregarding fluff, it enhances efficiency in consuming information, freeing more time for valuable content.</div>
                        <div>
                            <div className='footer-done'><DoneIcon style={{color:"green"}}/>Filters weak arguments and speculation</div>
                            <div className='footer-done'><DoneIcon style={{color:"green"}}/>Highlights most relevant points</div>
                            <div className='footer-done'><DoneIcon style={{color:"green"}}/>Saves time by eliminating fluff</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='custom-divider'></div>
            <div>
                <div>Who is Summary Master for?</div>
                <div>Summary Master is a summarizing tool desingned for students,writers,teachers,institutions,journalists,and any internet user who needs to quickly understand the essence of lengthy content</div>
                <div>
                    <div>
                        <div><img src={people} style={{width:'2vw',hieght:'4vh'}}></img></div>
                        <div>Anyone with access to the Internet</div>
                        <div>Summary Master is for anyone who just needs to get the gist of a long article. You can read this summary, then go read the original article if you want to.</div>
                    </div>
                    <div>
                        <div><img src={student} style={{width:'2vw',hieght:'4vh'}}></img></div>
                        <div>Students</div>
                        <div>Summary Master is for students studying for exams, who are overwhelmed by information overload. This tool will help them summarize information into a concise, easy to digest piece of text.</div>
                    </div>
                    <div>
                        <div><img src={writer} style={{width:'2vw',hieght:'4vh'}}></img></div>
                        <div>Writers</div>
                        <div>Summary Master is for anyone who writes frequently, and wants to quickly summarize their articles for easier writing and easier reading.</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div><img src={teacher} style={{width:'2vw',hieght:'4vh'}}></img></div>
                        <div>Teachers</div>
                        <div>Summary Master is for teachers who want to summarize a long document or chapter for their students.</div>
                    </div>
                    <div>
                        <div><img src={institute} style={{width:'2vw',hieght:'4vh'}}></img></div>
                        <div>Institutions</div>
                        <div>Summary Master is for corporations and institutions who want to condense a piece of content into a summary that is easy to digest for their employees/students.</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div><img src={journalist} style={{width:'2vw',hieght:'4vh'}}></img></div>
                        <div style={{color:'white',fontSize:'24px',fontWeight:'bold'}}>Journalists</div>
                        <div>Summary Master is for journalists who need to summarize a long article for their newspaper or magazine.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
