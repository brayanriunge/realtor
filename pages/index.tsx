import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <Layout>
      <Dashboard />
      <Cards/>
      <Footer/>
    </Layout>
  );
}
