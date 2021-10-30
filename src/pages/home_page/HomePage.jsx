import React from "react";

import { useAuth } from "../../contexts/AuthContext";

import "./homePage.css";

const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <img src="https://picsum.photos/800/300" alt="random" />
      {currentUser && <h3>Welcome, {currentUser.email}</h3>}
      <div className="content">
        <h3>Dummy Filler Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
          nulla pariatur. Eius, perferendis, eum officiis mollitia iste delectus
          pariatur totam veritatis esse velit tenetur hic ipsa quo consectetur
          reiciendis, facere non exercitationem harum. Nobis veritatis excepturi
          odit dolore voluptatum dicta accusantium consectetur quibusdam numquam
          sequi corporis laborum eos iure pariatur placeat consequuntur itaque
          dolores molestiae, quod et neque, a, nostrum animi. Suscipit assumenda
          ad obcaecati unde veniam repellat autem totam culpa laudantium, ipsum
          minima maiores itaque eos eveniet cupiditate a neque praesentium
          nihil? Excepturi, consequatur molestias nam aliquam dolores rerum
          atque similique harum? Consequuntur id sit impedit sequi. Unde debitis
          quam ex repellendus. Veritatis quasi vero omnis assumenda corporis
          earum, labore culpa, eaque dolore nesciunt at aperiam laudantium nam
          nisi repellendus voluptatum nemo in incidunt minima! Ipsam delectus,
          maiores autem alias temporibus sequi ipsum odit accusantium laborum
          excepturi esse odio. Aperiam illo odio ad sunt quibusdam a quod
          praesentium inventore velit provident, placeat pariatur deleniti iure
          quae, suscipit tempora. Quisquam beatae autem doloribus nemo
          praesentium iusto ab ex amet itaque nobis porro pariatur veniam natus
          labore, distinctio atque aliquid eius numquam temporibus molestias
          ducimus. Nostrum eveniet, consequuntur incidunt eum doloremque
          excepturi maiores amet! Itaque quaerat dolorum aliquam dolor ipsum?
        </p>
        <h3>Dummy Filler Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
          nulla pariatur. Eius, perferendis, eum officiis mollitia iste delectus
          pariatur totam veritatis esse velit tenetur hic ipsa quo consectetur
          reiciendis, facere non exercitationem harum. Nobis veritatis excepturi
          odit dolore voluptatum dicta accusantium consectetur quibusdam numquam
          sequi corporis laborum eos iure pariatur placeat consequuntur itaque
          dolores molestiae, quod et neque, a, nostrum animi. Suscipit assumenda
          ad obcaecati unde veniam repellat autem totam culpa laudantium, ipsum
          minima maiores itaque eos eveniet cupiditate a neque praesentium
          nihil? Excepturi, consequatur molestias nam aliquam dolores rerum
          atque similique harum? Consequuntur id sit impedit sequi. Unde debitis
          quam ex repellendus. Veritatis quasi vero omnis assumenda corporis
          earum, labore culpa, eaque dolore nesciunt at aperiam laudantium nam
          nisi repellendus voluptatum nemo in incidunt minima! Ipsam delectus,
          maiores autem alias temporibus sequi ipsum odit accusantium laborum
          excepturi esse odio. Aperiam illo odio ad sunt quibusdam a quod
          praesentium inventore velit provident, placeat pariatur deleniti iure
          quae, suscipit tempora. Quisquam beatae autem doloribus nemo
          praesentium iusto ab ex amet itaque nobis porro pariatur veniam natus
          labore, distinctio atque aliquid eius numquam temporibus molestias
          ducimus. Nostrum eveniet, consequuntur incidunt eum doloremque
          excepturi maiores amet! Itaque quaerat dolorum aliquam dolor ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
          nulla pariatur. Eius, perferendis, eum officiis mollitia iste delectus
          pariatur totam veritatis esse velit tenetur hic ipsa quo consectetur
          reiciendis, facere non exercitationem harum. Nobis veritatis excepturi
          odit dolore voluptatum dicta accusantium consectetur quibusdam numquam
          sequi corporis laborum eos iure pariatur placeat consequuntur itaque
          dolores molestiae, quod et neque, a, nostrum animi. Suscipit assumenda
          ad obcaecati unde veniam repellat autem totam culpa laudantium, ipsum
          minima maiores itaque eos eveniet cupiditate a neque praesentium
          nihil? Excepturi, consequatur molestias nam aliquam dolores rerum
          atque similique harum? Consequuntur id sit impedit sequi. Unde debitis
          quam ex repellendus. Veritatis quasi vero omnis assumenda corporis
          earum, labore culpa, eaque dolore nesciunt at aperiam laudantium nam
          nisi repellendus voluptatum nemo in incidunt minima! Ipsam delectus,
          maiores autem alias temporibus sequi ipsum odit accusantium laborum
          excepturi esse odio. Aperiam illo odio ad sunt quibusdam a quod
          praesentium inventore velit provident, placeat pariatur deleniti iure
          quae, suscipit tempora. Quisquam beatae autem doloribus nemo
          praesentium iusto ab ex amet itaque nobis porro pariatur veniam natus
          labore, distinctio atque aliquid eius numquam temporibus molestias
          ducimus. Nostrum eveniet, consequuntur incidunt eum doloremque
          excepturi maiores amet! Itaque quaerat dolorum aliquam dolor ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
          nulla pariatur. Eius, perferendis, eum officiis mollitia iste delectus
          pariatur totam veritatis esse velit tenetur hic ipsa quo consectetur
          reiciendis, facere non exercitationem harum. Nobis veritatis excepturi
          odit dolore voluptatum dicta accusantium consectetur quibusdam numquam
          sequi corporis laborum eos iure pariatur placeat consequuntur itaque
          dolores molestiae, quod et neque, a, nostrum animi. Suscipit assumenda
          ad obcaecati unde veniam repellat autem totam culpa laudantium, ipsum
          minima maiores itaque eos eveniet cupiditate a neque praesentium
          nihil? Excepturi, consequatur molestias nam aliquam dolores rerum
          atque similique harum? Consequuntur id sit impedit sequi. Unde debitis
          quam ex repellendus. Veritatis quasi vero omnis assumenda corporis
          earum, labore culpa, eaque dolore nesciunt at aperiam laudantium nam
          nisi repellendus voluptatum nemo in incidunt minima! Ipsam delectus,
          maiores autem alias temporibus sequi ipsum odit accusantium laborum
          excepturi esse odio. Aperiam illo odio ad sunt quibusdam a quod
          praesentium inventore velit provident, placeat pariatur deleniti iure
          quae, suscipit tempora. Quisquam beatae autem doloribus nemo
          praesentium iusto ab ex amet itaque nobis porro pariatur veniam natus
          labore, distinctio atque aliquid eius numquam temporibus molestias
          ducimus. Nostrum eveniet, consequuntur incidunt eum doloremque
          excepturi maiores amet! Itaque quaerat dolorum aliquam dolor ipsum?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
