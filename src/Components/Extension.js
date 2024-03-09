import React from 'react'
import './styles/myStyles.css'
import firefox from './images/firefox.png'
import chrome from './images/chrome.png'

export default function Extensions() {
    return (
        <>

        <div className='extension-container'>
            <div className='ex-header'>Browser Extensions</div>
            <div className='ex-desc'>Use Summary Master browser extensions to summarize any webpage in click.</div>
            <div className='ex-button'>
                <div className='button1'>
                    <a>
                        <img src={chrome} alt='chrome'></img>
                        <div>
                            <div className='button1-inner1'>
                                Available in the
                            </div>
                            <div className='button1-inner2'>
                                Chrome Web Store
                            </div>
                        </div>
                    </a>
                </div>
                <div className='button2'>
                    <a>
                        <img src={firefox} alt='firefox'></img>
                        <div>
                            <div className='button2-inner1'>
                                Firefox Browser
                            </div>
                            <div className='button2-inner2'>
                                ADD-ONS
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
