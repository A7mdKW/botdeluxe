const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const prefix = '+'
const moment = require('moment');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setStatus("idle")
    client.user.setGame('Domain | سيرفر دومين','https://www.twitch.tv/a7mddkw');
   client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`D `,` De`,`Del`,`Delu`,`Delux`,`Deluxe`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);10

});
});
client.on('ready', () => {
 console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
//my server 7Disaster


const roles = {
    "pubg": "508713685615902729",
    "fort": "508713682927222784",
    "b04": "508716228119101461",
   /* "php": "431735717568446485",
    "php": "431735717568446485",
    "php": "431735717568446485",
    "php": "431735717568446485",
    "php": "431735717568446485",*/
     
};

function getMember(guild,user) {
    return client.guilds.get(guild).members.get(user);
};
client.on("raw", event =>
{
    if (event.t === "MESSAGE_REACTION_ADD" || event.t == "MESSAGE_REACTION_REMOVE")
    {
        if( event.d.message_id == "508716557627817984"){
            if( roles[event.d.emoji.name] ){
                var member = getMember("508075670392537099",event.d.user_id);
                if( member.roles.get(roles[event.d.emoji.name]) ){
                    member.removeRole(roles[event.d.emoji.name]);
                } else {
                    member.addRole(roles[event.d.emoji.name]);
                }
            }
        }
    }
});


/*const roles = {
    
    "fort": "483391693522075650"

    
   
    


};

function getMember(guild,user) {
    return client.guilds.get(guild).members.get(user);
};
client.on("raw", event =>
{
    if (event.t === "MESSAGE_REACTION_ADD" || event.t == "MESSAGE_REACTION_REMOVE")
    {
        if( event.d.message_id == "487667034726072320"){
            if( roles[event.d.emoji.name] ){
                var member = getMember("409055346108399617",event.d.user_id);
                if( member.roles.get(roles[event.d.emoji.name]) ){
                    member.removeRole(roles[event.d.emoji.name]);
                } else {
                    member.addRole(roles[event.d.emoji.name]);
                }
            }
        }
    }
});


*/


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Petronas."));
    });
    
   /* client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**منور السيرفر و اتمنى تشوف القوانين
**`) 
}).catch(console.error)
})*/

    
     client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "+help") {
   message.react("💌")
   message.channel.send(`**تم أرسالك الأوامر على الخاص - #**`).then(m => m.delete(5000));
     
 message.author.sendMessage(`


           **Deluxe**

**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    
**- Public Commands | اوامر العامه **   

**+ping** لمعرفة سرعة استجابة في الوقت الحالي
**+roll** الفزعه  
**+id** الهويه
**+server** معلومات السيرفر
**+avatar** لعرض صوره حسابك    
**+members** يريك كل الاعضاء في السيرفر
**+profile** لعرض معلومات الحساب

**- Admins Commands | أوامر الادارة**

**+bc** الرسال رساله لاعضاء السيرفر في الخاص 
**+clear** لمسح كلام الي في اي شات
**+mute** لي اعطاء عضو ميوت
**+unmute**لكي تشيل الميوت من العضو  
**+role all** لاعطاء الكل الرتبة المحددة   
**+ban** لاعطا باند
**+kick** لطرد عضو 
**+moveall** لسحب الكل الى الروم الي انت في
**+bot** معلومات عن البوت
**+roles** ليريك كل رتب السيرفر
**+mutechannel** لكي تقفل الشات
**+unmutechannel**  لكي تفتح الشات
    
**- Music Commands | اوامر الميوزك    **

**+play - Play a song from YouTube.
+skip - Skip a song.
+stop - Stops the music.
+volume - Change the volume of the bot.
+np - The song that now playing.
+queue - See the queue of songs.
+pause - Pause the music.
+resume - Resume the music.**

**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**

# - Created & Programmed By : @ Ahmad KW .


`);

    }
});
//7Disaster done
/***++nowplaying** - يعرض الأغنية التي يتم تشغيلها حاليًا
**++Play** لعب <title | URL | subcommand> - الأغنية المتوفرة
**++Playlists** - يعرض قوائم التشغيل المتاحة
**++queue** [pagenum] - يعرض قائمة الانتظار الحالية
**++remove** <position | ALL> - يزيل أغنية من قائمة الانتظار
**++search** <query> - يبحث في Youtube عن طلب بحث مقدم
**++scsearch** <query> - يبحث عن Soundcloud للاستعلام المقدم
**++shuffle** - خلط الأغاني التي قمت بإضافتها
**++skip** - التصويت لتخطي الأغنية الحالية
 */client.on('message', message => {
          if (message.content.startsWith("+id")) {
            if(!message.channel.guild) return message.reply('هذا الامر للسيرفرات فقط')
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
       var heg;
       if(men) {
           heg = men
       } else {
           heg = message.author
       }
     var mentionned = message.mentions.members.first();
        var h;
       if(mentionned) {
           h = mentionned
       } else {
           h = message.member
       }
              moment.locale('ar-TN');
     var id = new  Discord.RichEmbed()
   .setColor("#ff0000")
   .setThumbnail(message.author.avatarURL)
   .setAuthor(` ${message.author.username} `, message.author.avatarURL)
   .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
   message.channel.send(id)
}       });




client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});
 client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if(message.content === 'السلام عليكم'){
        message.reply('**●وعَلَيْكُم ●السَّلامُ ● ورَحْمَةُ ●اللهِ ●وَبَرَكاتُهُ**');
    }
});

client.on('message', message => {
    if(message.content === 'brb'){
        message.reply('**الله معك**');
    }
});
client.on('message', message => {
    if(message.content === 'برب'){
        message.reply('**الله معك**');
    }
});
client.on('message', message => {
    if(message.content === 'السلام'){
        message.reply('**وعليكم السلام**');
    }
});client.on('message', message => {
    if(message.content === 'تسجيل دخول '){
        message.reply('**✅ تم تسجيل دخولك **');
    }
});
client.on('message', message => {
    if(message.content === 'تسجيل دخول'){
        message.reply('**✅ تم تسجيل دخولك  **');
    }
});
client.on('message', message => {
    if(message.content === 'تسجيل خروج'){
        message.reply('**✅ تم تسجيل خروجك  **');
    }
});
 client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
client.on('message', message => {

       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});
  client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
client.on('message', message => {
if (message.content.startsWith('+ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - ليس لديك البرمشنات المطلوبة!**');
       if(toKick.kickable) return message.reply("**# - لا استطيع طرد شخص اعلى مني**");
       if(!toReason) return message.reply("**# - اكتب سبب**")
       if(toKick.id === message.author.id) return message.reply("**# لا استطيع طردك**")
       if(!message.guild.member(toKick).kickable) return message.reply("**# - لا استعطيع طرد هذا الشخص!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("تم طردك من السيرفر!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - ليس لديك الخواص المطلوبه**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("344127240935571457")) return message.reply("**انا لا استطيع طرد نفسي**");
       if(toBan === message.member.guild.owner) return message.reply("**# لا تستطيع طرد اونر السيرفر*");
       if(toBan.bannable) return message.reply("**لا استطيع طرد شخص اعلى مني**");
       if(!toReason) return message.reply("**# - اكتب سبب**")
       if(toBan.id === message.author.id) return message.reply("**# لا استطيع طردك**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - لا استطيع طرد هذا الشخص**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("تم طردك من السيرفر")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );

   }
});
client.on('message', message => {
    if (message.content === '+roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message =>{

   
if(!true) return;
    if(message.content.split(' ')[0] == (prefix+'clear')){
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
    var lmt = message.content.split(' ')[1]
    ,  hang = 0
    ,  max  = 0;
    
    if(!lmt) lmt = 100;
    if(typeof lmt !== 'number') return;
    if(lmt > 50){
        for(;lmt > 50;){
        lmt--;
        hang++;
        }
        }
     message.channel.fetchMessages({limite:lmt}).then(msgs=>{
     msgs.channel.bulkDelete(msgs);
     });
     if(hang > 50){
         hang = 50;
     }
        message.channel.fetchMessages({limite:hang}).then(msgs=>{
        message.channel.bulkDelete(msgs);
     });
     
  max= hang+lmt;
    message.channel.send(`تم مسح الرسائل بنجاح `).then(m => m.delete(5000));
       
    }
});
client.on('message', msg => {
 if (msg.content.startsWith( '+send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      /*if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)*/
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**يجب تحديد الشخص**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**من سيرفر 7Disaster**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**تم ارسال رسالتك**`)
    }
});

client.on('message', message => {
if(message.content.startsWith(prefix + 'moveall')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });
   
   client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ?say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  

});
   client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0000000)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

 client.on('message', message => { //bot
                            if (message.content.startsWith("+bot")) {
                            message.channel.send({
                                embed: new Discord.RichEmbed()
                                    .setAuthor(client.user.username,client.user.avatarURL)
                                    .setThumbnail(client.user.avatarURL)
                                    .setColor('RANDOM')
                                    .setTitle('``7Disaster Bot`` ')
                                    .addField('``Uptime``', [timeCon(process.uptime())], true)
                                    .addField('``Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                                    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                                    .addField('``servers``', [client.guilds.size], true)
                                    .addField('``channels``' , `[ ${client.channels.size} ]` , true)
                                    .addField('``Users``' ,`[ ${client.users.size} ]` , true)
                                    .addField('``Name``' , `[ ${client.user.tag} ]` , true)
                                    .addField('``ID``' , `[ ${client.user.id} ]` , true)
                                          .addField('``Prefix``' , `[ ${prefix} ]` , true)
                                          .addField('``Language``' , `[ Java Script ]` , true)

                            })
                        }
                        });

                        function timeCon(time) { //bot2
                            let days = Math.floor(time % 31536000 / 86400)
                            let hours = Math.floor(time % 31536000 % 86400 / 3600)
                            let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
                            let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
                            days = days > 9 ? days : '0' + days
                            hours = hours > 9 ? hours : '0' + hours
                            minutes = minutes > 9 ? minutes : '0' + minutes
                            seconds = seconds > 9 ? seconds : '0' + seconds
                            return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
                        }
                        
               


client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","log");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let a = new Discord.RichEmbed()
        .setColor('#000000')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         //.addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:a});          
               
 
      }
      });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '💖الترحيب');
    let memberavatar = member.user.avatarURL
	let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('#36393e')
        .setThumbnail(memberavatar)
		.setImage('https://cdn.discordapp.com/attachments/369883019055726592/576892746539860029/123123.png')
        .addField('💬 | Name :  ',`${member}`)
        .addField('📢 | نورت السيرفر' , `WelCome To Server, ${member}`)
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("حياك الله ! :revolving_hearts: ",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server:', `${member.guild.name}`,true)
                                       
     .setFooter(`DV : NayerAZ , Ahmad KW`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });


           
          
       
         

 

          
          client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bcall')){
 if (message.author.id !== '351472610732670976') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '351472610732670976') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});              


client.on('message', message => {
    if(message.content == ('+profile')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./img/ID1.png','./img/ID2.png','./img/ID3.png','./img/ID4.png','./img/ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });


client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === 'ccolors') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 200 لون انتضر | ▶️')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === 'لون'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 200; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });
                        client.login(process.env.BOT_TOKEN);
