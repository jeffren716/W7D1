export const getTodos = () => (
  $.ajax ({
  url: "/api/todos",
  method: "GET",
  })
);

export const addTodo = (todo) => (
  $.ajax ({
    url: '/api/todos',
    method: 'POST',
    data: {todo},
    dataType: 'JSON'
  })
);
