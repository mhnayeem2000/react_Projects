const name = "Mh  Nayeem";
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();

function Card(){
    return   <div className="flax">
                <div className='button'>
                <button className='btn'>Show Student</button>
                </div>
                
                <div className='boxStyle' >
                    <button className='cross'>X</button>
                    <img className='img' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"></img>
                    
                    <h1 className='h1Style' >{name}</h1>
                    <h4 className='h4Style'  >-Student of CSE</h4>
                    <p>lorem ipsum doman do itsa kasur manus is lareo kilo isat manush kintu na</p>
                    <p><b>{day + "/" + month + "/" + year}</b></p>
                </div>  
            </div> 
}

export default Card;