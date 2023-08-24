import React from "react";

import './Pagination.css'

export default function Pagination({count}) {
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination count={count} />
      </Stack>
    </div>
  );
}
