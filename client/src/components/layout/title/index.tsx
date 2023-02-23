import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src="/brand-collapsed.png" alt="Refine" width="250px" />
        ) : (
          <img src="/brand.png" alt="Refine" width="250px" />
        )}
      </Link>
    </Button>
  );
};
