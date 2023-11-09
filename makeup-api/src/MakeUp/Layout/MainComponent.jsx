import React from "react"
import { useNavigate } from "react-router-dom";
function MainComponent(){
    const featuredProducts = [
        // Add your featured product data here
        { id: 1, name: "KYLIE Beauty", imageUrl: "https://i.pinimg.com/236x/5d/d1/58/5dd15847440c5cea7d2b46cb63dcb5a4.jpg" },
        { id: 2, name: "Fenty Beauty", imageUrl: "https://i.pinimg.com/236x/18/56/80/18568060a2c1ddbfc150aa354bfec375.jpg" },
        { id: 3, name: "Huda Beauty", imageUrl: "https://i.pinimg.com/236x/43/c3/be/43c3be568c77bfce9baa3c0f0738906f.jpg" },
        { id: 4, name: "Gucci", imageUrl: "https://i.pinimg.com/236x/ef/fc/a1/effca1361eb2a08f8c6cd1b9b3fc66e1.jpg" },
        { id: 5, name: "LipGloss", imageUrl: "https://i.pinimg.com/236x/79/fe/10/79fe10100985b765b740f50cb1224d99.jpg" },
        { id: 6, name: "NYX", imageUrl: "https://i.pinimg.com/236x/6b/76/31/6b7631b251a927e15c141af5d5f859eb.jpg" },
      ];
    const navigate = useNavigate();

    const handleExploreClick = () => {
        // Navigate to the "all products" page
        navigate("list");
      };
    return(
        <div>
      <div>

        <h1 className="display-3 text-uppercase text-center text-danger font-weight-bold">
          WELCOME
        </h1>
        <div>
        <button
          className="btn btn-dark btn-lg position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill"
          onClick={() => handleExploreClick()}
        >
          Explore Now
        </button>
        </div>
        <p className="lead text-muted">
          Step into the enchanting world of beauty where every brushstroke unveils
          a canvas of self-expression. At All Things Beauty, we believe makeup is
          more than colors on a palette; it's a celebration of individuality and
          confidence. Dive into a realm where each product tells a story, and every
          application is an art form. Discover the magic of makeup, where beauty
          knows no bounds, and each face becomes a masterpiece. Welcome to a journey
          of self-discovery and empowerment. Your unique beauty, reimagined.
        </p>
        </div>
        <div>
        <div className="container mt-4">
        <h2 className="text-center">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
     </div>
    )
}
export default MainComponent;