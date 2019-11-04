import React from 'react';

const coloring = (action) => {
  if(action === 'Open')
    return 'red'
  else if (action === 'Merged')
    return 'blue'
  else
    return 'green'
}

const PullReuqest = ({ event }) => (
  <div>
    <a href={event.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">
      <div>{event.repo.name}</div>
      <div>{event.payload.action}</div>
      <div
        className={() => coloring(event.payload.action)}
      ></div>
    </a>
  </div>
)

export default PullReuqest;
