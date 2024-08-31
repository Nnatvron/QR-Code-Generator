
import React, { useState,useEffect } from 'react'
import QrCSS from '../QRGenerator/Qrgenerator.module.css'

import QRCode from 'qrcode'
function Qrgenerator() {
const[Text, setText]=useState("");
const[qrData,setqrData]=useState("");

    useEffect (()=>{
        const GenerateQRCode= async ()=>{
            try{
                const dataURL=await QRCode.toDataURL(Text);
                setqrData(dataURL);
            }
            catch(e)
            {
                console.error("Error Generating QR Code");
            }
        }
        Text && GenerateQRCode();
    },[Text])

    return (
        <>
            <div className={QrCSS.container}>
            <div className={QrCSS.inputWrapper}>
                <h1><i className="ri-qr-code-line"></i>QR CODE GENERATOR</h1>
                <input type="text" placeholder="Enter URL Here.." 
                        value={Text}
                        autoFocus
                        onChange={(e)=>{setText(e.target.value.trim())}}
                />
                <small><i className="ri-qr-code-fill"></i>Your QR Code Will Generated Automatically.</small>
                
                
                <small>@By Nnatvron</small>
            </div>


            <div className={QrCSS.qrImageWrapper}>
                <h2>Your QR Code Here..</h2>
            <div className={QrCSS.QrImage}>
                {qrData && Text && <img src={qrData} alt="QR Code"/>}
            </div>
            <h3>{Text}</h3>
            <a href={qrData} download='QR by Nnatvron.png'>
                <i className='ri-download-line'></i>
            </a>
            </div>
            </div>
        </>
    )
}

export default Qrgenerator