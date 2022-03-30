import { useState } from "react";

const Gallery = () =>{

    const url1="https://getmyuni.azureedge.net/college-images-test/bn-college-of-engineering-and-technology-bncet-lucknow/64d2d8eb227b46569961b3c4cfb924de.jpeg"
    const url2="https://getmyuni.azureedge.net/college-image/big/bn-college-of-engineering-and-technology-bncet-lucknow.jpg"
    const url3="https://www.targetadmission.com/img/colleges/optimized/600/IMG-1-6174053.jpg"
    const url4="https://images.static-collegedunia.com/public/college_data/images/campusimage/1568787529thumb_91b93IMG-20180522-WA0030.jpg"
    const url5="https://images.static-collegedunia.com/public/college_data/images/campusimage/1568787529thumb_91b93IMG-20180522-WA0030.jpg"
    const url6="https://2.bp.blogspot.com/-cPv5LfVwBVE/Wdda4LRIxII/AAAAAAAAzGY/byJe_SGYEfAT0jYVAZiTxw7WZeJ_Q5FHgCLcBGAs/s1600/BNCET.png"
    const url7="https://bncet.ac.in/wp-content/uploads/2022/03/sport-1.jpg"
    const url8="https://images.static-collegedunia.com/public/college_data/images/campusimage/1568787529thumb_9b59020180524_105422.png"
    const url9="https://www.thundafunda.com/wp-content/uploads/2020/12/c-10.jpg"
    const [mainimg, setMainimg] = useState(url1)

    const changeImage = (imgurl) => { 
         setMainimg(imgurl)
    }
    return(
        <div className="gall">
        <div className="container">
            
            
            <img className="img-fluid mt-5 mainimg" src={mainimg} alt=""/>


            <div className="row mt-5">
                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url1)}} className="img-fluid" src={url1} alt=""/>
                    {/* onclick andr event aise hi paas krte hai */}
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url2)}} className="img-fluid" src={url2} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url3)}} className="img-fluid" src={url3} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url4)}} className="img-fluid" src={url4} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url5)}} className="img-fluid" src={url5} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url6)}}  className="img-fluid" src={url6} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url7)}} className="img-fluid" src={url7} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url8)}} className="img-fluid" src={url8} alt=""/>
                </div>

                <div className="col-md-4">
                    <img onClick={ () =>{ changeImage(url9)}} className="img-fluid" src={url8} alt=""/>
                </div>

            </div>
        </div>
        </div>
    )
}
export default Gallery;

























// const Gallery=()=>{

//     const img1="https://getmyuni.azureedge.net/college-images-test/bn-college-of-engineering-and-technology-bncet-lucknow/64d2d8eb227b46569961b3c4cfb924de.jpeg"
//     const img2="https://getmyuni.azureedge.net/college-image/big/bn-college-of-engineering-and-technology-bncet-lucknow.jpg"
//     const img3="https://www.targetadmission.com/img/colleges/optimized/600/IMG-1-6174053.jpg"
//     const img4="https://images.static-collegedunia.com/public/college_data/images/campusimage/1568787529thumb_91b93IMG-20180522-WA0030.jpg"
//     const img5="https://images.static-collegedunia.com/public/college_data/images/campusimage/1568787529thumb_91b93IMG-20180522-WA0030.jpg"
//     const img6="https://2.bp.blogspot.com/-cPv5LfVwBVE/Wdda4LRIxII/AAAAAAAAzGY/byJe_SGYEfAT0jYVAZiTxw7WZeJ_Q5FHgCLcBGAs/s1600/BNCET.png"
//     const img7="https://bncet.ac.in/wp-content/uploads/2022/03/sport-1.jpg"
//     const img8="https://images.static-collegedunia.com/public/college_data/images/campusimage/1568787529thumb_9b59020180524_105422.png"
//     const img9="https://www.thundafunda.com/wp-content/uploads/2020/12/c-10.jpg"
//     return(
//         <div>
//         <div className="container">
//             <div className="row">
//                 <div className="col md-4">
//                 <img className="img-fluid mt-5" src={img1} alt=" "/>
//                 </div>  

//                 <div className="col-md-4">
//                 <img className="img-fluid mt-5" src={img2} alt=" "/>
//                 </div>

//                 <div className="col-md-4">
//                 <img className="img-fluid mt-5" src={img3} alt=" "/>
//                 </div>
//                   </div>
//                 </div>

//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <img className="img-fluid mt-5" src={img4}/>
//                             </div>

//                             <div className="col-md-4">
//                             <img className="img-fluid mt-5" src={img5}/>
//                             </div>

//                             <div className="col-md-4">
//                             <img className="img-fluid mt-5" src={img6}/>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-4">
//                                 <img className="img-fluid mt-5" src={img7}/>
//                                 </div>

//                                 <div className="col-md-4">
//                                 <img className="img-fluid mt-5" src={img8}/>
//                                 </div>

//                                 <div className="col-md-4">
//                                 <img className="img-fluid mt-5" src={img9}/>
//                                 </div>
//                             </div>
//                         </div>
//                 </div>
      
//     )
// }
// export default Gallery