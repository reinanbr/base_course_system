import { createResource, Show } from 'solid-js';
import { fetchUser } from '../services/api';

export default function User() {
  const [user] = createResource(fetchUser);

  return (
    <div>
      {/* spell-checker: disable-next-line */}
      <h1>Usuário</h1>
      {/* spell-checker: disable-next-line */}
      <Show when={user()} fallback={<span>Carregando...</span>}>
        <p>Id: {user().user.id}</p>
        <p>Username: {user().user.username}</p>
        <p>Email: {user().user.email}</p>
      </Show>
    </div>
  );
}
