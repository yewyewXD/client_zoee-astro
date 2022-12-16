import React from "react";
import NextJSLink from "next/link";
import { Link } from "@chakra-ui/react";

const NextLink = ({ href, children }) => {
  return (
    <NextJSLink passHref href={href}>
      <Link>{children}</Link>
    </NextJSLink>
  );
};

export default NextLink;
