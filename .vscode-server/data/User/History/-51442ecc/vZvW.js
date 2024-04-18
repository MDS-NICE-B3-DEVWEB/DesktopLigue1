import React, { useEffect } from 'react';
import './Equipe.css';

function Classement() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'js-statorium-id-164';
    var jsStatoriumWidget={options:{targetId:"",widgetID:0,},targetHtmlEle:"",messages:{missingTargetId:"please specify element target id",missingTargetHtml:"not found html element with the specified id",missingFeedUrl:"please specify your xml feed url",errorFetchingData:"Error reading data from the remote url"},themes:{},setOptions:function(options){if(options.targetId){this.options.targetId=options.targetId;}
if(options.widgetID){this.options.widgetID=options.widgetID;}
console.log(jsStatoriumTransfers);},validate:function(){if(!this.options.targetId){console.log(this.messages.missingTargetId);return false;}
this.targetHtmlEle=document.getElementById(this.options.targetId);if(!this.targetHtmlEle){console.log(this.messages.missingTargetHtml);return false;}
return true;},render:function(){var self=this;if(!this.validate()){return;}
self.applyCss();this.fetch(function(response){var json=JSON.parse(response);if(json.data.error){console.log(json.data.error);self.targetHtmlEle.innerHTML=json.data.error;return;}
if(json.state==1){self.targetHtmlEle.innerHTML=self.template(json);}else{console.log(self.messages.errorFetchingData);}});},fetch:function(callback){if(window.XMLHttpRequest){var xhr=new XMLHttpRequest();}else{var xhr=new ActiveXObject("Microsoft.XMLHTTP");}
xhr.addEventListener("readystatechange",function(){if(this.readyState===4&&this.status===200){callback(this.responseText);}});var params="url="+encodeURIComponent(this.options.feedUrl)+"&itemsCount="+this.options.itemsCount+"&showDescription="+this.options.showDescription+"&showMedia="+this.options.showMedia;xhr.open("POST","https://statorium.com/index.php?option=com_statoriumwidgets&task=widgetsView&wid="+this.options.widgetID);xhr.setRequestHeader("Content-Type","application/json");xhr.setRequestHeader("dataType","application/json");xhr.setRequestHeader("Access-Control-Allow-Origin","*");xhr.setRequestHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT");xhr.setRequestHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");xhr.send(params);},template:function(response){var html='';switch(response.wtype){case "Standings":;jsStatoriumStandings.setOptions(response.options)
html+=jsStatoriumStandings.template(response.data);break;case "Events":jsStatoriumTopPlayers.setOptions(response.options)
html+=jsStatoriumTopPlayers.template(response.data);break;case "Matches":jsStatoriumMatches.setOptions(response.options)
html+=jsStatoriumMatches.template(response.data);break;case "Transfers":jsStatoriumTransfers.setOptions(response.options)
html+=jsStatoriumTransfers.template(response.data);break;}
return html;},applyCss:function(){}}
var jsStatoriumStandings={setOptions:function(options){this.options=options;},template:function(response){var html='<div class="statoriumWidgetStandings">';if(jsStatoriumStandings.options.widgetTitle){html+='<div class="statoriumWidgetTitle">'+jsStatoriumStandings.options.widgetTitle+'</div>';}else if(response.season.fullName){html+='<div class="statoriumWidgetTitle">'+response.season.fullName+'</div>';}
var cols=[];var htmlHead='<thead>';htmlHead+='<tr>';htmlHead+='<th></th>';htmlHead+='<th class="tblStatoriumStandingsTeam"></th>';if(jsStatoriumStandings.options.tblColumns){jsStatoriumStandings.options.tblColumns.forEach(function(el){Object.keys(el).forEach(function(c){cols.push(c);htmlHead+='<th>'+el[c]+'</th>';});});}
htmlHead+='</tr>';htmlHead+='</thead>';if(response.season.groups.length){response.season.groups.forEach(function(element){if(jsStatoriumStandings.options.group_id===element.groupID||+jsStatoriumStandings.options.group_id===0){html+='<div class="tblStatoriumGroup">'+element.groupName+'</div>';html+='<table class="tblStatoriumStandings">';html+=htmlHead;html+='<tbody>';var rank=1;element.standings.forEach(function(element){const columns=JSON.parse(element.options);html+='<tr>';html+='<td>'+rank+'</td>';html+='<td class="tblStatoriumStandingsTeam">';if(+jsStatoriumStandings.options.emblem){html+=(element.logo)?`<img class="tdStatoriumLogo" src="${element.logo}"/>`:'';}
html+=`<span>${element.teamName}</span></td>`;cols.forEach(function(el){html+='<td>'+columns[el]+'</td>';});html+='</tr>';rank++;});html+='</tbody>';html+='</table>';}});}else if(response.season.standings.length){html+='<table class="tblStatoriumStandings">';html+=htmlHead;html+='<tbody>';var rank=1;response.season.standings.forEach(function(element){const columns=JSON.parse(element.options);html+='<tr>';html+='<td>'+rank+'</td>';html+='<td class="tblStatoriumStandingsTeam">';if(+jsStatoriumStandings.options.emblem){html+=(element.logo)?`<img src="${element.logo}"/>`:'';}
html+=`<span>${element.teamName}</span></td>`;cols.forEach(function(el){html+='<td>'+columns[el]+'</td>';});html+='</tr>';rank++;});html+='</tbody>';html+='</table>';}
html+='</div>';(!+jsStatoriumStandings.options.widgetStyle)&&jsStatoriumStandings.applyCss();return html;},applyCss:function(){var rules=`
            .statoriumWidgetStandings {padding:10px; font-family:Arial, sans-serif; font-size:14px; background-color:#fff;}
            .statoriumWidgetStandings\t.statoriumWidgetTitle {margin:-10px\t-10px\t5px; padding:10px; font-size:16px; background-color:#eeeeee;}
            .statoriumWidgetStandings\t.tblStatoriumGroup {margin-bottom:5px; font-weight:700;}
            table.tblStatoriumStandings + .tblStatoriumGroup {margin-top:15px;}
            table.tblStatoriumStandings {width:100%; margin:0; border:none; border-collapse:collapse; table-layout:auto; text-align:center;}
            table.tblStatoriumStandings th, table.tblStatoriumStandings td {width:1%; border:none; padding:3px; text-align:center; vertical-align:middle; line-height:1.5;}
            table.tblStatoriumStandings th {font-size:12px; font-weight:600;}
            .tblStatoriumGroup + table.tblStatoriumStandings th {background-color:#f7f7f7;}
            table.tblStatoriumStandings td {border-top:1px solid #efefef; font-weight:400;}
            table.tblStatoriumStandings\t.tblStatoriumStandingsTeam {width:50%; text-align:left;}
            table.tblStatoriumStandings\t.tblStatoriumStandingsTeam * {display:inline-block; vertical-align:middle;}
            table.tblStatoriumStandings\t.tblStatoriumStandingsTeam > img {width:24px; margin-right:7px;}
        `;var styleTag=document.createElement('style');styleTag.type='text/css';styleTag.appendChild(document.createTextNode(rules));document.head.appendChild(styleTag);}}
var jsStatoriumTopPlayers={setOptions:function(options){this.options=options;},template:function(response){var html='<div class="statoriumWidgetEvents">';if(jsStatoriumTopPlayers.options.widgetTitle){html+=`<div class="statoriumWidgetTitle">${jsStatoriumTopPlayers.options.widgetTitle}</div>`;}else if(response.season.event.eventName){html+=`<div class="statoriumWidgetTitle">${response.season.event.eventName}</div>`;}
if(response.season.players){html+='<table class="tblStatoriumEvents">';response.season.players.forEach(function(element){html+='<tr>';html+='<td class="tblStatoriumEventsPlayer">';if(+jsStatoriumTopPlayers.options.photo){html+=(element.photo)?`<img class="tdStatoriumPhoto" src="${element.photo}"/>`:'';}
if(+jsStatoriumTopPlayers.options.name===0){html+=`<span>${element.fullname}</span>`;}else if(+jsStatoriumTopPlayers.options.name===1){html+=`<span>${element.shortname}</span>`;}else{html+=`<span>${element.first_name} ${element.last_name}</span>`;}
html+=`</td>`;html+=`<td>${element.teamname.replace(/,/g,', ')}</td>`;html+=`<td>${element.eventCount}</td>`;});html+='</table>';(!+jsStatoriumTopPlayers.options.widgetStyle)&&jsStatoriumTopPlayers.applyCss();}
html+='</div>';return html;},applyCss:function(){var rules=`
            .statoriumWidgetEvents {padding:10px; font-family:Arial, sans-serif; font-size:14px; background-color:#fff;}
            .statoriumWidgetEvents\t.statoriumWidgetTitle {margin:-10px\t-10px\t5px; padding:10px; font-size:16px; background-color:#eeeeee;}
            table.tblStatoriumEvents {width:100%; margin:0; border:none; border-collapse:collapse; table-layout:auto; text-align:center;}
            table.tblStatoriumEvents td {width:1%; border:none; border-top:1px solid #efefef; padding:3px; text-align:center; vertical-align:middle; line-height:1.5;}
            table.tblStatoriumEvents tr:first-child > td {border:none;}
            table.tblStatoriumEvents\t.tblStatoriumEventsPlayer, table.tblStatoriumEvents\t.tblStatoriumEventsPlayer + td {width:30%; text-align:left;}
            table.tblStatoriumEvents\t.tblStatoriumEventsPlayer + td {font-size:12px; color:#9e9e9e;}
            table.tblStatoriumEvents\t.tblStatoriumEventsPlayer * {display:inline-block; vertical-align:middle;}
            table.tblStatoriumEvents\t.tblStatoriumEventsPlayer > img {width:35px; margin-right:7px;}
        `;var styleTag=document.createElement('style');styleTag.type='text/css';styleTag.appendChild(document.createTextNode(rules));document.head.appendChild(styleTag);}}
var jsStatoriumMatches={setOptions:function(options){this.options=options;},template:function(response){var html='<div class="statoriumWidgetMatches">';if(jsStatoriumMatches.options.widgetTitle){html+=`<div class="statoriumWidgetTitle">${jsStatoriumMatches.options.widgetTitle}</div>`;}else if(response.calendar.seasonName){html+=`<div class="statoriumWidgetTitle">${response.calendar.fullName}</div>`;}
html+='<table class="tblStatoriumMatches">';var beforeHours=this.options.beforeHours;var afterHours=this.options.afterHours;var BH='0000-00-00';var AH='3000-01-01';if(beforeHours){BH=new Date(Date.now()-beforeHours*(60*60*1000)).toISOString();}
if(afterHours){AH=new Date(Date.now()+beforeHours*(60*60*1000)).toISOString();}
var count=0;if(response.calendar.matchdays){response.calendar.matchdays.forEach(function(element){var htmlMM='';htmlMD='<tr>';htmlMD+=(+jsStatoriumMatches.options.matchday)?`<td class="tblStatoriumMatchday" colspan="4">${element.matchdayName} </td>`:'';htmlMD+='</tr>';if(element.matches){element.matches.forEach(function(match){if(!jsStatoriumMatches.options.count||jsStatoriumMatches.options.count>count){if(jsStatoriumMatches.options.matchStatus==''||jsStatoriumMatches.options.matchStatus==match.matchStatus.statusID){var matchDT=match.matchDate+"T"+match.matchTime+":00.000+00:00";if(matchDT>=BH&&matchDT<=AH){matchDTLocal=new Date(matchDT)
htmlMM+='<tr>';htmlMM+=`
                                    <td>
                                    <div class="statoriumMatchBox">
                                    <div class="statoriumMatchTime">${matchDTLocal.toLocaleString()}</div>
                                    <div class="statoriumMatchStat">
                                `;htmlMM+=(+jsStatoriumMatches.options.emblem)?`<div class="tblStatoriumMatchesTeam"><img src="${match.homeParticipant.logo}"/><div><span>${match.homeParticipant.participantName}</span></div></div>`:`<div class="tblStatoriumMatchesTeam"><div><span>${match.homeParticipant.participantName}</span></div></div>`;htmlMM+=`<div class="tblStatoriumMatchesScore">${jsStatoriumMatches.score(match)}</div>`;htmlMM+=(+jsStatoriumMatches.options.emblem)?`<div class="tblStatoriumMatchesTeam"><img src="${match.awayParticipant.logo}"/><div><span>${match.awayParticipant.participantName}</span></div></div>`:`<div class="tblStatoriumMatchesTeam"><div><span>${match.awayParticipant.participantName}</span></div></div>`;htmlMM+=`
                                    </div>
                                    </div>
                                    </td>
                                `;htmlMM+='</tr>';count++;}}}});}
if(htmlMM){html+=htmlMD+htmlMM;}});(!+jsStatoriumMatches.options.widgetStyle)&&jsStatoriumMatches.applyCss();}
html+='</table>';html+='</div>';return html;},score:function(match){{var html='';if(match.matchStatus.statusID=='1'){html+=`${match.homeParticipant.score} : ${match.awayParticipant.score}`;}else if(match.matchStatus.statusID=='0'){html+='vs';}else if(match.matchStatus.statusID=='-1'){html+=`${match.homeParticipant.score} : ${match.awayParticipant.score}`;html+='<div class="statoriumMatchLive">Live</div>';}
return html;}},applyCss:function(){var rules=`
            .statoriumWidgetMatches {padding:10px; font-family:Arial, sans-serif; font-size:14px; background-color:#fff;}
            .statoriumWidgetMatches\t.statoriumWidgetTitle {margin:-10px\t-10px\t5px; padding:10px; font-size:16px; background-color:#eeeeee;}
            table.tblStatoriumMatches {width:100%; margin:0; border:none; border-collapse:collapse; table-layout:auto; text-align:center;}
            table.tblStatoriumMatches td {width:1%; padding:5px; text-align:center; vertical-align:middle; line-height:1.5;}
            table.tblStatoriumMatches\t.tblStatoriumMatchday {border:none; padding-top:20px; text-align:left; font-size:12px; font-weight:700;}
            table.tblStatoriumMatches tr:first-child > .tblStatoriumMatchday {padding-top:0;}
            table.tblStatoriumMatches td:not(.tblStatoriumMatchday) {border:1px solid #efefef;}
            table.tblStatoriumMatches tr:first-child > td {border:none;}
            table.tblStatoriumMatches\t.statoriumMatchTime {padding-bottom:7px; font-size:12px; color:#9e9e9e;}
            table.tblStatoriumMatches\t.statoriumMatchStat {display:flex; align-items:center;}
            table.tblStatoriumMatches\t.tblStatoriumMatchesTeam {display:flex; flex-direction:column; align-items:center; flex:2;}
            table.tblStatoriumMatches\t.tblStatoriumMatchesTeam > img {width:32px;}
            table.tblStatoriumMatches\t.tblStatoriumMatchesTeam > div {display:table; table-layout:fixed; width:100%; white-space:nowrap;}
            table.tblStatoriumMatches\t.tblStatoriumMatchesTeam span {display: table-cell; overflow:hidden; text-overflow:ellipsis;}
            table.tblStatoriumMatches\t.tblStatoriumMatchesScore {flex:1; padding:0 3px; font-size:16px; font-weight:700;}
            table.tblStatoriumMatches\t.tblStatoriumMatchesScore > .statoriumMatchLive {max-width:60px; margin:0 auto; font-size:12px; background-color:#f44336; color:#ffffff;}
        `;var styleTag=document.createElement('style');styleTag.type='text/css';styleTag.appendChild(document.createTextNode(rules));document.head.appendChild(styleTag);}}
var jsStatoriumTransfers={setOptions:function(options){this.options=options;},template:function(response){var html='<div class="statoriumWidgetTransfers">';if(jsStatoriumTransfers.options.widgetTitle){html+=`<div class="statoriumWidgetTitle">${jsStatoriumTransfers.options.widgetTitle}</div>`;}
var teamname=jsStatoriumTransfers.options.team_name;if(response.transfers){html+='<table class="tblStatoriumTransfers">';if(+jsStatoriumTransfers.options.theader){html+=`<thead>
                    <tr>
                    <th>Date</th>
                    <th class="tblStatoriumLeft">Player</th>
                    <th class="tblStatoriumLeft">Left</th>
                    <th class="tblStatoriumLeft">Joined</th>
                    <th>Type</th>
                    <th>Fee</th>
                    </tr>
                </thead>`;}
html+='<tdoby>';response.transfers.forEach(function(element){html+='<tr>';html+='<td>'+element.date+'</td>';html+=(+jsStatoriumTransfers.options.emblem&&element.player.photo)?`<td class="tblStatoriumTransferPlayer"><div><img src="${element.player.photo}" alt="${element.player.name}"/><span>${element.player.name}</span></div></td>`:`<td class="tblStatoriumTransferPlayer"><span class='${(+jsStatoriumTransfers.options.emblem)?'enablePic':''}'>${element.player.name}</span></td>`;var teamFrom=element.fromTeam.shortName;var teamTo=element.toTeam.shortName;if(teamname=='1'){teamFrom=element.fromTeam.middleName;teamTo=element.toTeam.middleName;}else if(teamname=='2'){teamFrom=element.fromTeam.name;teamTo=element.toTeam.name;}
if(teamFrom==null){teamFrom='-';}
if(teamTo==null){teamTo='-';}
html+=(+jsStatoriumTransfers.options.emblem&&element.fromTeam.emblem)?`<td class="tblStatoriumTransferTeam"><div><img src="${element.fromTeam.emblem}" alt="${teamFrom}"/><span>${teamFrom}</span></div></td>`:`<td class="tblStatoriumTransferTeam"><span class='${(+jsStatoriumTransfers.options.emblem)?'enablePic':''}'>${teamFrom}</span></td>`;html+=(+jsStatoriumTransfers.options.emblem&&element.toTeam.emblem)?`<td class="tblStatoriumTransferTeam"><div><img src="${element.toTeam.emblem}" alt="${teamTo}"/><span>${teamTo}</span></div></td>`:`<td class="tblStatoriumTransferTeam"><span class='${(+jsStatoriumTransfers.options.emblem)?'enablePic':''}'>${teamTo}</span></td>`;html+='<td>'+element.details.type+'</td>';html+='<td>'+convertToMil(element.details.fee)+'</td>';html+='</tr>';});html+='</tdoby>';html+='</table>';jsStatoriumTransfers.applyCss();}
html+='</div>';return html;},applyCss:function(){var rules=`
            .statoriumWidgetTransfers {padding:10px; font-family:Arial, sans-serif; font-size:14px; background-color:#fff;}
            .statoriumWidgetTransfers\t.statoriumWidgetTitle {margin:-10px\t-10px\t5px; padding:10px; font-size:16px; background-color:#eeeeee;}
            table.tblStatoriumTransfers {width:100%; margin:0; border:none; border-collapse:collapse; table-layout:auto; text-align:center;}
            table.tblStatoriumTransfers th {border: none; border-bottom:1px solid #efefef;padding:3px;text-align:center;}
            table.tblStatoriumTransfers th.tblStatoriumLeft {text-align:left;}
            table.tblStatoriumTransfers td {width:1%; border:none; border-top:1px solid #efefef; padding:3px; text-align:center; vertical-align:middle; line-height:1.2;}
            table.tblStatoriumTransfers tr:first-child > td {border:none;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferPlayer, table.tblStatoriumTransfers\t.tblStatoriumTransferTeam {height:48px; font-size:12px; text-align:left;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferPlayer > div, table.tblStatoriumTransfers\t.tblStatoriumTransferTeam > div {display:flex; align-items:center;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferPlayer > span.enablePic {display:block; margin-left:50px;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferTeam > span.enablePic {margin-left:35px;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferPlayer img {max-width:45px; margin-bottom:-3px;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferTeam img {max-width:30px;}
            table.tblStatoriumTransfers\t.tblStatoriumTransferPlayer img + span, table.tblStatoriumTransfers\t.tblStatoriumTransferTeam img + span {margin-left:5px;}
        `;var styleTag=document.createElement('style');styleTag.type='text/css';styleTag.appendChild(document.createTextNode(rules));document.head.appendChild(styleTag);}}
function convertToMil(mil){if(mil>0){return "â‚¬"+(Math.abs(Number(mil))/1.0e+6).toFixed(2)+"M";}else{return mil;}}
    script.type = 'text/javascript';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jsStatoriumWidget) {
        const jsStatoriumWidgetClone = Object.assign({}, window.jsStatoriumWidget);
        jsStatoriumWidgetClone.setOptions({
          targetId: 'js-statorium-widget-164',
          widgetID: 164,
        });
        jsStatoriumWidgetClone.render();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="js-statorium-widget-164"></div>;
}

export default Classement;