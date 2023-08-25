import Banner from "@/components/banner";
import Essentials from "@/components/essentials";
import Collections from "@/components/collections";
import BigOne from "@/components/bigone";

import BigTwo from "@/components/blogsection";
import BlogSection from "@/components/blogsection";
import Insta from "@/components/insta";
import Look from "@/components/look";
import Stores from "@/components/stores";
import Subscribe from "@/components/subscribe";
import Categories from "@/components/categories";

export default function Home() {
  return (
    <div>
      <Banner />
      <Essentials />
      <Collections />
      <Categories />
      <BlogSection/>
      <Look/>
      <Insta/>
 <Subscribe/>

    </div>
  );
}

/*

   <BlogSection/>
 
  


upper done
nav done
banner done
essentials done
collections done
looks  done
(optional thing) not yet
categories done
insta done
footer not yet
*/