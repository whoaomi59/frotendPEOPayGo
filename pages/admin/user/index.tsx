import Layout from "@/pages/components/layout";
import Table from "@/pages/components/setting/table";

const usersData = [
  {
    id: 1,
    name: "John",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
  },
  {
    id: 2,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
  {
    id: 3,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
  {
    id: 4,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
  {
    id: 5,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
  {
    id: 6,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
  {
    id: 7,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
  {
    id: 8,
    name: "Jane",
    lastName: "chilito",
    email: "chilito@yes.com",
    img: "https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg",
  },
];

export default function Users() {
  const module = "Usuarios";
  return (
    <Layout>
      <Table data={usersData} module={module} />
    </Layout>
  );
}
