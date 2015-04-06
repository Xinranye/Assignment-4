// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Home',
    backgroundColor:'#fff'

});


var tab1 = Titanium.UI.createTab({  
    icon:'tap_icon.png',
    title:'Home',
    window:win1,
    backgroundColor:'#e49b0f'
    
    
});


var myImage = Ti.UI.createImageView({
	width:600,
	height:600,
	image:'mom.PNG'
});


var label1 = Titanium.UI.createLabel({
	color:'#999',
	width:600,
	height:600,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var label1a = Titanium.UI.createLabel({
	color:'#5C5C5C',
	text:'April 17th - 19th',
	font:{fontSize:35,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top:380
});

myImage.addEventListener('click', function(e) {    
            Ti.API.info("image clicked");
            Ti.Platform.openURL("http://www.uidaho.edu/alumni/sarb/momsweekend");

 });           
 
label1.add(myImage);
win1.add(label1);
win1.add(label1a);

//
// create controls tab and root window
//

var win2 = Titanium.UI.createWindow({  
    title:'Events',
    backgroundColor:'#ffe375'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Events',
    backgroundColor:'#ECB957',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#ffe375',
	text:'Events',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});


var view2 = Ti.UI.createView({});


var tableView = Titanium.UI.createTableView({
	scrollable: true	
});

var firstSection = Ti.UI.createTableViewSection({
	headerTitle: 'Events we have',
	footerTitle: 'Join us!'
});

var firstRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	title:'Amazing Race Traditions Challenge - 4/17 - 5-6pm'
});

var firstInfo = Titanium.UI.createLabel({
	text:'Teams of two will compete against others across campus to learn about University of Idaho traditions landmarks.',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'30',
	left:'10',
	height:'20'
	
});

var secondRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	backgroundColor:'white',
	title:'Brunch featuring University of Idaho Jazz Choir - 4/18 - 9:30am'
});

var secondInfo = Titanium.UI.createLabel({
	text:'Enjoy a lovely breakfast buffet set to the sounds of the UI Jazz Choir. We also will announce the 2015 Mom of the Year!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'30',
	left:'10',
	height:'20'
	
});

var thirdRow = Titanium.UI.createTableViewRow({
	color: '#814407',
	//backgroundColor:'white',
	title:'Dinner and Entertainment with Frangela - 4/18 - 6:30pm'
});

var thirdInfo = Titanium.UI.createLabel({
	text:'Enjoy a dinner buffet followed by a comedy show from these two talented performers!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'30',
	left:'10',
	height:'20'
	
});


firstSection.add(firstRow);
firstSection.add(secondRow);
firstSection.add(thirdRow);
firstRow.add(firstInfo);
secondRow.add(secondInfo);
thirdRow.add(thirdInfo);
tableView.setData([firstSection]);
view2.add(tableView);

win2.add(view2);
win2.add(label2);

var win3 = Titanium.UI.createWindow({
	title:'Promotions',
	backgroundColor: '#fff'	
});

var tab3 = Titanium.UI.createTab({
	icon:'KS_nav_ui.png',
	title: 'Promotions',
	backgroundColor:'#ECB957',
	window: win3	
});

var label3 = Titanium.UI.createLabel({
	color:'#ffd119',
	//text:'Promotions',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view3 = Ti.UI.createView({});


var tableViewb = Titanium.UI.createTableView({
	scrollable: true	
});

var firstSectionb = Ti.UI.createTableViewSection({
	headerTitle: 'Sponsors',

});

var firstRowb = Titanium.UI.createTableViewRow({
	color: '#814407',
	backgroundColor:'#ff6666',
	title:'Paradise Creek Bicycles'
});

var firstInfob = Titanium.UI.createLabel({
	text:'Offering half-off bicycle rentals for visiting moms and their kids!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'30',
	left:'10',
	height:'20'
	
});

var secondRowb = Titanium.UI.createTableViewRow({
	color: '#814407',
	backgroundColor:'white',
	title:'Prichard Art Gallery'
});

var secondInfob = Titanium.UI.createLabel({
	text:'Offering a $5 off on any purchase of $25 or more at the UI Prichard Art Gallery Gift Store!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'30',
	left:'10',
	height:'20'
	
});

var thirdRowb = Titanium.UI.createTableViewRow({
	color: '#814407',
	backgroundColor:'#ff6666',
	title:'One World Cafe'
});

var thirdInfob = Titanium.UI.createLabel({
	text:'Offering 20% off drinks and merchandise!',
	font:{fontSize:'16',fontWeight:'blod'},
	textAlign:'center',
	top:'30',
	left:'10',
	height:'20'
	
});


firstSectionb.add(firstRowb);
firstSectionb.add(secondRowb);
firstSectionb.add(thirdRowb);
firstRowb.add(firstInfob);
secondRowb.add(secondInfob);
thirdRowb.add(thirdInfob);
tableViewb.setData([firstSectionb]);
view3.add(tableViewb);

win3.add(view3);
win3.add(label3);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);


// open tab group
tabGroup.open();
