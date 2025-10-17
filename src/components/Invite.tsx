import { useEffect } from 'react';

function Invite() {
  const discordInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1151832497383030804&scope=bot%20applications.commands&permissions=1099511627775';

  useEffect(() => {
    window.location.href = discordInviteUrl;
  }, []);

  return null;
}

export default Invite;