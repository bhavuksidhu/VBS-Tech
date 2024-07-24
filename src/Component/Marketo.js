import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Marketo.css';

const Container = styled.div`
  background-color: white;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Categories = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CategoryHeader = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
`;

const StyledBlogPost = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ReadMoreLink = styled.a`
  font-size: xx-large;
  color: #007bff;
  text-decoration: none;
`;


const blogPosts = [
  {
    title: 'What is the Metaverse? And what will be the features of Metaverse?',
    date: 'Sunday, January 23, 2022',
    excerpt:
      'The Metaverse has been the buzzword for web development companies, app developers, and end-users. With social media giant Facebook and software conglomerate, Microsoft claims to make this technology more advanced with passing the time. But what is the Metaverse? And what will be the features of Metaverse? In this blog, we will try to answer [...]',
    link: '#',
  },
  {
    title: 'What is the Metaverse? And what will be the features of Metaverse?',
    date: 'Sunday, January 23, 2022',
    excerpt:
      'The Metaverse has been the buzzword for web development companies, app developers, and end-users. With social media giant Facebook and software conglomerate, Microsoft claims to make this technology more advanced with passing the time. But what is the Metaverse? And what will be the features of Metaverse? In this blog, we will try to answer [...]',
    link: '#',
  },
  {
    title: 'What is the Metaverse? And what will be the features of Metaverse?',
    date: 'Sunday, January 23, 2022',
    excerpt:
      'The Metaverse has been the buzzword for web development companies, app developers, and end-users. With social media giant Facebook and software conglomerate, Microsoft claims to make this technology more advanced with passing the time. But what is the Metaverse? And what will be the features of Metaverse? In this blog, we will try to answer [...]',
    link: '#',
  },
  {
    title: 'What is the Metaverse? And what will be the features of Metaverse?',
    date: 'Sunday, January 23, 2022',
    excerpt:
      'The Metaverse has been the buzzword for web development companies, app developers, and end-users. With social media giant Facebook and software conglomerate, Microsoft claims to make this technology more advanced with passing the time. But what is the Metaverse? And what will be the features of Metaverse? In this blog, we will try to answer [...]',
    link: '#',
  },
  {
    title: 'What is the Metaverse? And what will be the features of Metaverse?',
    date: 'Sunday, January 23, 2022',
    excerpt:
      'The Metaverse has been the buzzword for web development companies, app developers, and end-users. With social media giant Facebook and software conglomerate, Microsoft claims to make this technology more advanced with passing the time. But what is the Metaverse? And what will be the features of Metaverse? In this blog, we will try to answer [...]',
    link: '#',
  },
  {
    title: 'What is the Metaverse? And what will be the features of Metaverse?',
    date: 'Sunday, January 23, 2022',
    excerpt:
      'The Metaverse has been the buzzword for web development companies, app developers, and end-users. With social media giant Facebook and software conglomerate, Microsoft claims to make this technology more advanced with passing the time. But what is the Metaverse? And what will be the features of Metaverse? In this blog, we will try to answer [...]',
    link: '#',
  }
];

const Marketo = () => {
  return (
    <>
    <div className='container-fluid text-white back-ground3'>
        <div className='container home-section3'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <h1 className='h2edit3'>Blog</h1>
              </div>
              <div>
                <p className='pedit3'>Read our Blog posts to stay up to date with the world of technology.  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Container className="container bg-white mb-5 mt-5">
        <div>
          <SectionHeader className="d-flex">
            <h4><i className="fa-solid fa-minus"></i></h4>
            <h2>Read our Blogs.</h2>
          </SectionHeader>
          <h5 className="mrf mt-3">Here are some latest news that we like blogging about. Follow our blogs and keep in touch with us.</h5>
        </div>
      </Container>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Categories className="categories">
              <CategoryHeader className="d-flex align-middle">
                <h4><i className="fa-solid fa-minus"></i></h4>
                <h4>CATEGORIES</h4>
              </CategoryHeader>
              <hr className="bg-dark mt-4" />
              <CategoryList className="mt-4">
                <CategoryItem><a href="" className="text-muted">Web Development(1)</a></CategoryItem>
                <CategoryItem><a href="" className="text-muted">App Development(1)</a></CategoryItem>
                <CategoryItem><a href="" className="text-muted">E-commerce Solutions(1)</a></CategoryItem>
              </CategoryList>
            </Categories>
          </div>
          <div className="col-md-8">
            <div className="blog-posts">
              {blogPosts.map((post, index) => (
                <StyledBlogPost className="blog-post p-4" key={index}>
                  <h3 className="pt-3">{post.title}</h3>
                  <p className="date pt-3">{post.date}</p>
                  <p className="excerpt pt-3">{post.excerpt}</p>
                  <ReadMoreLink href={post.link} className="read-more pt-3"><i className="fa-solid fa-arrow-right"></i></ReadMoreLink>
                </StyledBlogPost>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Marketo;
