import React, { useState } from 'react'
import parse from 'html-react-parser';
import emailjs from 'emailjs-com';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Mail() {
    function handle(e){
        // console.log(e.target.value)
        setSee(e.target.value)
    }
    const [text, setText] = useState('')
    const [see, setSee] = useState('All')
    const sendEmail = (e) => {
        e.preventDefault();
        if (see == 'All'){
            emailjs.sendForm('service_23pgk8p', 'template_yvq1g7k', e.target, 'user_cMkN3SaeukCBqnA4R7TLG')
            .then((result) => {
                console.log(result);
                console.log(e.target);
            }, (error) => {
                console.log(error.text);
            });
            emailjs.sendForm('service_wf19d9q', 'template_f9499hw', e.target, 'user_cMkN3SaeukCBqnA4R7TLG')
            .then((result) => {
                console.log(result);
                console.log(e.target);
            }, (error) => {
                console.log(error.text);
            });

        }
        if (see == 'Only Golf Users'){
            emailjs.sendForm('service_23pgk8p', 'template_yvq1g7k', e.target, 'user_cMkN3SaeukCBqnA4R7TLG')
            .then((result) => {
                console.log(result);
                console.log(e.target);
            }, (error) => {
                console.log(error.text);
            });

        }
        if (see == 'Without Golf Users'){
            emailjs.sendForm('service_wf19d9q','template_f9499hw', e.target, 'user_cMkN3SaeukCBqnA4R7TLG')
            .then((result) => {
                console.log(result);
                console.log(e.target);
            }, (error) => {
                console.log(error.text);
            });

        }

       
    };
    return (
        <form encType="multipart/form-data" onSubmit={sendEmail} className='container'>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Email should go</label>
                <select onChange={handle} class="form-control" id="exampleFormControlSelect1">
                    <option>All Users</option>
                    <option>Only Golf Users</option>
                    <option>Without Golf Users</option>

                </select>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Email Subject</label>
                <input name='subject' type="text" class="form-control" id="exampleInputPassword1" placeholder="Email Subject" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Content</label>
                <input style={{display:'none'}} onChange={e => { console.log(e.target.value) }} value={text} name='content' type="text" class="form-control" id="exampleInputPassword1" placeholder="Email Subject" />

                <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data)
                    } }
                  
                />
            </div>
            {/* <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea name='content' class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div> */}

            {/* <div class="form-group">
                <label for="exampleFormControlFile1">Image</label>
                <input name='img' type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div> */}
            <button type="submit" class="btn d-block w-100 btn-primary">Send</button>
        </form>
    )
}

export default Mail
