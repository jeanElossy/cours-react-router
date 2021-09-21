import React from 'react';
import History from './History';
import Navigation from "./Navigation";
import { NavLink, Route } from 'react-router-dom';

const About = ({match}) => {
   console.log(match)
  return (
    <div>
      <Navigation />
      <h1>A-propos</h1>
      <History />
      
      <div>
      <NavLink to={`${match.url}/contact`}>
        Contact
        </NavLink>
        <Route path={`${match.path}/:name`}  render={({match}) => (<div>{match.params.name}</div>)}/>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste veniam accusantium maxime ab architecto laborum quod at placeat. Architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda maxime asperiores porro alias nobis repellat voluptatem placeat illum explicabo! Libero debitis laboriosam rerum at aperiam ad id cum dolore sint magnam. Quidem ducimus et impedit deleniti voluptate ipsam excepturi quos mollitia! Quod, aliquid quis pariatur excepturi quae ex unde.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid velit deserunt molestiae modi ab, ea voluptatem placeat laudantium magnam delectus, obcaecati explicabo nesciunt, similique alias rerum. Eius enim reiciendis cum similique odit expedita praesentium ea, unde vel? Corporis nesciunt consequuntur a omnis soluta vero, praesentium porro animi reprehenderit dolorem perferendis nostrum alias facilis atque fugiat, rem temporibus cumque ut distinctio molestiae voluptas perspiciatis nulla magni voluptatibus. Ullam, maiores quasi qui quam quibusdam iste beatae aperiam incidunt ducimus esse et eum, nobis tempora ipsam magnam consequuntur inventore laudantium sapiente. Expedita distinctio eum nam eligendi, dolor maxime consequatur magnam vero ducimus odio?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut vel ex libero impedit? Iste impedit deserunt, magni officia perspiciatis accusamus. Non delectus laborum in quia consectetur voluptate unde tempore magnam molestiae mollitia reprehenderit, sapiente tempora, facere excepturi, et sint necessitatibus odio quasi dicta explicabo corporis laboriosam dolorem odit? Exercitationem ipsam perspiciatis blanditiis pariatur vitae, asperiores sit quas iste repellat. Asperiores aliquid dignissimos, corporis sint inventore quia! Porro fugiat beatae dicta illum doloribus? Vero nostrum enim possimus praesentium blanditiis non fugit. Consequuntur neque, dicta soluta a inventore, sint beatae accusamus id ex ducimus non eveniet eos voluptate autem. Aperiam, ut cumque excepturi quis temporibus officia maiores id recusandae repudiandae, odio delectus perspiciatis aut nam laborum nulla quidem explicabo sequi harum eligendi alias nemo magni porro. Facere, sed aliquid! Excepturi ullam, perferendis temporibus atque suscipit veritatis quisquam sint eligendi iste officia harum hic dolorum impedit. Laborum dicta velit repellat dolores explicabo iure sit accusamus quam laboriosam incidunt culpa obcaecati aut iusto reiciendis ducimus nam ipsam maiores sapiente veritatis, aspernatur ex reprehenderit sint. Aspernatur minus accusamus ut sequi natus laboriosam odio ab velit! Provident eius quaerat consectetur tenetur aliquam possimus cupiditate recusandae nulla, pariatur fuga repellat laboriosam repudiandae! Exercitationem deleniti officia nam dolores?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis debitis magnam fugiat quas officia ut corrupti dolorem. Provident ducimus quidem nam in unde excepturi voluptatem tempora eius totam fugit voluptates asperiores voluptatibus odio voluptas pariatur esse quas adipisci ipsam ad et, ratione dolores! Officia quos sunt non quae nemo, rem, veritatis pariatur eaque, deserunt asperiores provident nostrum voluptatum libero voluptatibus officiis impedit veniam quisquam iste? Tenetur nihil beatae ducimus aliquam dignissimos nobis atque omnis neque dolorem, debitis explicabo vitae? Ipsum quo possimus repellendus qui sapiente deserunt maxime magnam ea, pariatur neque alias distinctio soluta voluptas cum recusandae. Soluta eum iste ducimus expedita porro commodi id repellendus error similique, doloremque aliquid distinctio voluptas eligendi quod, omnis illo qui officiis? Vel, earum corporis optio minima esse beatae in! Cum, ad. Dolores atque nostrum minima distinctio facilis ipsam deleniti quisquam eaque? Nobis, laborum similique itaque dolores vitae unde alias omnis rerum ut tenetur consequuntur excepturi facilis illum repellat ad suscipit dolorem laudantium iusto numquam tempora. Consectetur ipsa, quisquam modi velit natus aperiam. Non, nesciunt aliquam! Voluptatem itaque quo, ad, voluptate tempora cum laudantium officiis tenetur suscipit nostrum laborum saepe non odit totam alias repellat modi magnam illo! Temporibus perspiciatis quaerat iusto quisquam laudantium nesciunt. Repellendus numquam quo magni ducimus eligendi illo, illum, soluta possimus accusantium tempore a fugit excepturi ipsum aliquam perspiciatis error amet mollitia dolorem odio, odit expedita? Vitae, maiores nisi labore, illum magni ut est voluptatibus, minima incidunt quaerat ab? Fugit fugiat vero explicabo iste cumque, blanditiis odio, aliquid perspiciatis rem dicta incidunt ex. Et fugiat alias aspernatur ipsum est iste rerum, incidunt eos quam. Sit tempora velit incidunt ducimus alias quidem officiis quas eum illo deserunt quod est repellat minima magni, cumque exercitationem blanditiis natus nesciunt corporis deleniti temporibus a dolor porro. At, laborum sed molestias perferendis quam dolor.</p>
    </div>
  );
};

export default About;