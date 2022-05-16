import { useState } from "react";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export function Counter() {
  const [like, setLike] = useState(0);
  const [dlike, setDlike] = useState(0);
  return (
    <div className="likes">
      <IconButton aria-label="like-btn" onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like} color="primary">
      👍🏻
      </Badge>
      </IconButton>
      <IconButton aria-label="dislike-btn" onClick={() => setDlike(dlike + 1)}>
      <Badge badgeContent={dlike} color="error">
      👎🏻
      </Badge>
      </IconButton>
    </div>

  );
}
