import React, {useState} from 'react'

export default function () {
    let rasm = [
        
        "https://write.corbpie.com/lorem-picsum-placeholder-images-as-you-want-them/",        
            "https://picsum.photos/",
        ,  "https://picsum.photos/",
          "https://picsum.photos/",
     "https://picsum.photos/images"
    ]
    const [img, setImg] = useState(2)
    
    function Left(params) {
        setImg(img-1)
    }
    function Right(params) {
        setImg(img + 1)
    }
    
  return (
    <div>
        
        <button onClick={Left}>left</button>
        <img src={rasm[img]} alt="salom" />
        <button onClick={Right} >right</button>
        
    </div>
  )
}
