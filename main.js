const aniversaryDate = new Date("Jun 02, 2024 00:00:00");
let aniversryTimeStamp = aniversaryDate.getTime();

const calculateTime = setInterval(() => {
  const now = new Date("Jun 03, 2024 12:00:00");
  const nowTimeStamp = now.getTime();

  const distanceToAniversary = aniversryTimeStamp - nowTimeStamp;

  const dayInMs = 1000 * 60 * 60 * 24;
  const hoursInMs = 1000 * 60 * 60;
  const minutesInMs = 1000 * 60;

  const daysUntilBirthday = Math.floor(distanceToAniversary / dayInMs);

  const hoursUntilBirthday = Math.floor(
    (distanceToAniversary % dayInMs) / hoursInMs
  );

  const minutesUntilBirthday = Math.floor(
    (distanceToAniversary % hoursInMs) / minutesInMs
  );

  const secondsUntilBirthday = Math.floor(
    (distanceToAniversary % minutesInMs) / 1000
  );

  document.getElementById(
    "aniversary-date"
  ).innerText = `${daysUntilBirthday}d ${hoursUntilBirthday}h ${minutesUntilBirthday}m ${secondsUntilBirthday}s`;

  if (distanceToAniversary < 0) {
    aniversaryDate.setFullYear(aniversaryDate.getFullYear() + 1);
    aniversryTimeStamp = aniversaryDate.getTime();
  }
}, 1000);
