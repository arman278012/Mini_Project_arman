const Gallery=()=>{

    const img2="https://th.bing.com/th/id/R.5245ac8d8923ef907862ce8283c2cf4f?rik=7kq3IJ9dSh1WEw&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2017_jeep_compass_limited-HD.jpg&ehk=u1Nz73f0mQzlstyRtYwXtLTGwBPO9yYVTb88%2b%2fDimnU%3d&risl=&pid=ImgRaw&r=0"
    const img3="https://wallpapercave.com/wp/wp1972102.jpg"
    const img4="https://th.bing.com/th/id/R.6877bac414c2db8ee0bf215e63fd9732?rik=56m5AwtepFoOAA&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2fjeep_compass_trailhawk_2017-HD.jpg&ehk=j%2bHclw1KwBnMFVS4P4Z8JLL79MasaQ17%2bbPtH2%2bmpfs%3d&risl=1&pid=ImgRaw&r=0"

    return(
        <div className="container">
            <div className="row">
                <div className="col md-4">
                <img className="img-fluid mt-5" src={img2} alt=" "/>
                </div>  

                <div className="col-md-4">
                <img className="img-fluid mt-5" src={img3} alt=" "/>
                </div>

                <div className="col-md-4">
                <img className="img-fluid mt-5" src={img4} alt=" "/>
                </div>
                
                  </div>
                </div>
      
    )
}
export default Gallery