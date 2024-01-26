let support = client.config.supportid
client.on("interactionCreate", async interaction => {
  if (interaction.customId === "claim"){
//فحص الشخص 
  let support = client.config.supportid
    
  if (!interaction.member.roles.cache.has(support)) {
    return interaction.reply({ content: `ليس لديك صلاحيات لاستخدام هذا الأمر` });
}
let row = new MessageActionRow()
  .addComponents(   
    new MessageButton()
        .setCustomId(`clos`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER'))
			.addComponents(
    new MessageButton()
        .setCustomId(`unclaim`)
        .setLabel("UnCliam")
        .setEmoji("➖")
        .setStyle('DANGER'))
const wwwee = new MessageEmbed()
  .setColor('RED')
  .setAuthor(interaction.guild.name , interaction.guild.iconURL({ dynamic: true }))
  .setTitle('Rules Support・قوانين الدعم الفني')
  .setDescription(``)
.setImage(``) .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
.setFooter({text : `Best Host S`})
  

await interaction.message.edit({embeds:[wwwee], components:[row]}).then(async x => {
  const www = new MessageEmbed()

  .setDescription(`**تم استلام التذكرة بواسطة <@${interaction.member.id}>**`)
  .setColor('GREEN')
  await interaction.message.reply({embeds:[www], components:[]})
  
 let owner = interaction.member.id

db.set(`ownerticket_${interaction.channel.id}`, owner)
  
let high = client.config.highroleId
  
let point = db.get(`points_${interaction.guild.id}`);
let ary = {
  user: `${interaction.member.id}`,
  points: 1
};

if (!point) {
  db.set(`points_${interaction.guild.id}`, [ary]);
} else {
  let found = point.find(x => x.user === interaction.member.id);
  if (found) {
    found.points += 1; // Increment the points by 1
    point[point.indexOf(found)] = found;
  } else {
    point.push(ary); // If user not found, add them with 1 point
  }
  db.set(`points_${interaction.guild.id}`, point);



    
  }

})
  
   } 
})