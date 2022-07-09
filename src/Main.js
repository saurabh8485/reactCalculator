
import img1 from "./pic/img1.avif";
import img2 from "./pic/img2.avif";
import img3 from "./pic/img3.avif";
import img4 from "./pic/img4.webp";
import img5 from "./pic/img5.avif";
import img6 from "./pic/img6.avif";
import img7 from "./pic/img7.avif";
import img8 from "./pic/img8.avif";
import img9 from "./pic/img9.avif";
import img10 from "./pic/img10.avif";
import img11 from "./pic/img11.avif";
import img12 from "./pic/img12.avif";
import img13 from "./pic/img13.avif";
import img14 from "./pic/img14.avif";
import img15 from "./pic/img15.avif";
import img16 from "./pic/img16.avif";
import front from "./pic/front.avif";
import main from "./pic/main.png";


var image = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]

let alertFunction=(name, prise)=>
{
alert("You select "+name+" and its Prise is "+prise)
}

function Main({ product }) {
    return (
        <>
            <img className="w-100" src={front} alt="img" />

            <div className="bg-warning p-5">
                <img className="w-100" src={main} alt="img" />

                <div className="row row-cols-1 row-cols-md-4 g-4 m-3 text-center">
                    {
                        product.map((p, index) => {
                            return (
                                <div className="col p-4">
                                    <div className="card h-100 p-1 pt-3">
                                        <div>
                                            <img height={200} src={image[index]} alt="img" />
                                        </div>

                                        <div className="card-body">
                                            <a><h3 className="card-title">{p.product_name}</h3></a>
                                            <h4 className="card-text">Prize: {p.prize}</h4>
                                            <h6 className="card-text"><s>{p.category}</s></h6>
                                        </div>
                                        <div className="text-center p-2">
                                            <button type="button" onClick={()=>alertFunction(p.product_name, p.prize)} className="btn btn-warning w-50 text-center align-center">Add to Cart</button>
                                            
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                </div>
                </div>

        </>
    );
}
export default Main;



// import male from "./male.jpg"
// import female from "./female.png"

// function Main({ student }) {

//     return (
//         <>
//             <div className="bg-dark p-5">

//                 <div className="alert alert-light" role="alert">
//                     <div className="alert alert-info w-75 text-center display-4 mx-auto" role="alert">
//                         <h1 >CDAC Student Data</h1>
//                     </div>
//                 </div>
//                 <div className="row row-cols-1 row-cols-md-3 g-4 m-5 text-center ">

//                     {
//                         student.map((s, index) => {
//                             return (
//                                 <div className="col p-4">
//                                     <div className="card h-100 p-2 pt-5">
//                                         <div>{
//                                             s.gender === "M" ?
//                                                 <img height={200} src={male} alt="male" />
//                                                 :
//                                                 <img height={200} src={female} alt="female" />
//                                         }
//                                         </div>
//                                         <div className="card-body">
//                                             <h2 className="card-title">{s.name}</h2>
//                                             <h4 className="card-text">course: {s.course}<br />Age: {s.age}<br />City: {s.city}<br />Gender: {s.gender}</h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                 </div>

//             </div>


//         </>
//     );
// }
// export default Main
