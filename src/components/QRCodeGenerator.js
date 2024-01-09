import { useState } from 'react';
import QRCode from 'react-qr-code';

import React from 'react'

const QRCodeGenerator = () => {
const [URL, setURL] = useState('');
const [displayQRCode, setDisplayQRCode] = useState(false);
  
const getValue = ()=>{ 
    let value= document.getElementById('url').value;
  
      if (value===''){
        window.alert("Enter a URL")
        document.getElementById('url').value=''
        setDisplayQRCode(false)
        return;  
      }
      
      if (!isUrlValid(value)){
        window.alert("Enter a valid URL")
        document.getElementById('url').value=''
        setDisplayQRCode(false)
        return;
      }
      
      setURL(value)
      setDisplayQRCode(true);   
  }

  function isUrlValid(value) {
    const pattern = new RegExp(
      '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(value);
   }


  return (
    <div>
      <h3>QR Code Generator</h3>
      <form>
        <div class="mb-3">
        <label htmlFor="url" class="form-label">Enter valid URL:</label>
        <input type="text" class="form-control" id="url" placeholder="Enter a valid URL"></input>
        </div>
        <button type="button" class="btn btn-primary" onClick= {getValue}>Submit</button>
      </form>   
        {displayQRCode && (
            <div className="qr_code">
              <QRCode value={URL} size={300} />
            </div>
        )}
    </div>
  )
}

export default QRCodeGenerator
