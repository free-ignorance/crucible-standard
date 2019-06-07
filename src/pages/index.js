import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt turpis sed elit euismod, et ornare libero luctus. In venenatis mauris vitae justo bibendum, ac facilisis arcu porta. Ut consectetur, sem eget luctus faucibus, enim turpis ullamcorper nulla, at volutpat nisi sem quis elit. Nunc mollis, lectus dapibus ullamcorper auctor, ligula nulla vestibulum magna, in varius lacus magna non risus. Aliquam eget sapien eu elit consectetur feugiat eu et metus. Donec interdum faucibus lorem ac fringilla. Donec fermentum ex nec nulla blandit mollis. In tortor sapien, rutrum sit amet sodales quis, venenatis sit amet quam. Nam et accumsan felis. Sed eget volutpat purus. Sed elit elit, pellentesque nec commodo quis, semper et dolor. Sed volutpat velit a quam bibendum vulputate. Fusce pulvinar, est id condimentum mattis, quam tellus rhoncus lorem, nec efficitur nunc velit eu odio. Donec porttitor hendrerit justo, non efficitur orci vestibulum nec. Vivamus pharetra suscipit diam, sed molestie magna lobortis at. Nam ornare maximus ante ac dignissim.</p>
    <p>Proin tempor nunc at lacus cursus ullamcorper. Nulla sit amet felis nisi. Phasellus vulputate, libero vel dapibus eleifend, sem ipsum molestie velit, sit amet varius tellus sapien at mi. Proin et urna vel dolor finibus imperdiet. Nam non scelerisque diam. Sed cursus ac enim eget pharetra. Pellentesque vel sem vestibulum, efficitur ex quis, convallis sem. Sed at gravida tellus, ac blandit felis. Integer facilisis dictum pellentesque. Praesent condimentum finibus turpis, in blandit tellus volutpat nec. Sed ultricies accumsan est, sed sodales ipsum vestibulum id.</p>
  </Layout>
);

export default IndexPage
