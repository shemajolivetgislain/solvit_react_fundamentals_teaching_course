import { Button } from "./components/Button";
import Product from "./components/cards/Product";
import { Input } from "./components/input";

function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FL2C-A-BB-00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg",
      description:
        "Praesent quis orci sit amet ante facilisis suscipit. Integer in eros molestie, ultricies arcu ac, cursus quam. Nulla facilisi.",
    },
    {
      id: 2,
      name: "Iphone 16",
      price: 200,
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._UF1000,1000_QL80_.jpg",
      description:
        "Praesent quis orci sit amet ante facilisis suscipit. Integer in eros molestie, ultricies arcu ac, cursus quam. Nulla facilisi.",
    },
    {
      id: 3,
      name: "Bag",
      price: 300,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhc2KgRG10Lxjk3y7_FdTX-IcsxrgSnk8Fg&s",
      description:
        "Praesent quis orci sit amet ante facilisis suscipit. Integer in eros molestie, ultricies arcu ac, cursus quam. Nulla facilisi.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image:
        "https://img01.ztat.net/article/spp-media-p1/f584ce49fe2a35dbbef8317541b69090/8794de55f9bd4690998043bf0af8d484.jpg?imwidth=1800&filter=packshot",

      description:
        "Praesent quis orci sit amet ante facilisis suscipit. Integer in eros molestie, ultricies arcu ac, cursus quam. Nulla facilisi.",
    },
  ];

  const users = [
    {
      name: "John Deo",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos quas dicta esse sint soluta et perferendis eum eos totam perspiciatis nam laborum sapiente, necessitatibus rem minima modi veniam? Consequuntur.",
    },
    {
      name: "Jack Daniel",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos quas dicta esse sint soluta et perferendis eum eos totam perspiciatis nam laborum sapiente, necessitatibus rem minima modi veniam? Consequuntur.",
    },
  ];

  return (
    <>
      <div className="px-7 py-5 grid grid-cols-1 md:grid-cols-2 large:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Product
            title={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
            className={"w-full "}
            key={index}
          >
            <Button
              label={"Add to cart"}
              className="w-full"
              disabled={false}
              variant="danger"
            />
          </Product>
        ))}
      </div>

      <div className="px-7 py-5 grid grid-cols-1 md:grid-cols-2 large:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <Product title={user.name} description={user.description} key={index}>
            <span className="w-full bg-primaryColor-200 shadow-md text-primaryColor-800 py-1 px-4 border border-neutral-500 ">
              Go to Profile
            </span>
          </Product>
        ))}
      </div>

      <div className="w-full bg-slate-400/20 px-10 py-12">
        <span className="">Reusable Input Component</span>

        <Input
          label={"First name"}
          variant="default"
          placeholder={"First name"}
        />
        <Input
          label={"last name"}
          variant="default"
          placeholder={"last name"}
        />
        <Input label={"First name"} type="date" variant="default" />
        <Input label={"First name"} type="email" variant="default"  placeholder={"email"}/>
      </div>
      {/* <div className="px-7 py-5  grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        <Product />
        <div className="bg-purple-500 pt-4 border text-white">card1</div>
        <div className="bg-green-500 pt-4 border text-white">card2</div>
        <div className="bg-[#180e44] pt-4 border text-white">card3</div>
        <div className="bg-yellow-500 pt-4 border text-white">card3</div>
      </div> */}

      {/* <div className="w-[100%] bg-red-500  px-8 py-10 flex flex-col md:flex-row justify-between item-center gap-3  ">
        <div className="bg-purple-500 pt-4 border text-white">card1</div>
        <div className="bg-green-500 pt-4 border text-white">card2</div>
        <div className="bg-[#180e44] pt-4 border text-white">card3</div>
        <div className="bg-yellow-500 pt-4 border text-white">card3</div>
      </div> */}
    </>
  );
}

export default App;
