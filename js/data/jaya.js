function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem041(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance': 900,
		'time': 4
		},
		{
		'distance': 700,
		'time': 6
		},
		{
		'distance': 500,
		'time': 3
	    }],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question1 = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question1 = {
		'type': 'single',
		'id': '041',
		'question': 'A person crosses a'+distance+'long street in'+time+'.what is his speed in km per hour?',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question1;
	
}

function problem042(){
	var inputData = [{
		'rate': 20
        },
		{
		'rate':40
		},
		{
		'rate':30
		},
		{
		'rate': 20
		}],
		randomIndex = getRandomNumber(inputData.length),
		rate= inputData[randomIndex]['rate'],
		
		rate=parseInt(rate);
		percentage=[rate/(100-rate)*100];
		question2 = {};

	

	question2 = {
		'type': 'single',
		'id': '042',
		'question': 'If A is salary is'+rate+'less than B is salary by how much percent is B is salary more than A is?',
		'options': {
			'A': percentage+ parseInt(Math.random()*10),
			'B': percentage - parseInt(Math.random()*10),
			'C': percentage,
			'D': percentage- parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '04'
	}
	
	return question2;
	
}
function problem043(){
	var inputData = [{
		'x': 90,
		'y': 30
		},
		{
		'x': 30,
		'y': 20
		},
		{
		'x': 70,
		'y': 60
		},
		{
		'x': 110,
		'y': 70
		}],
		randomIndex = getRandomNumber(inputData.length),
		x= inputData[randomIndex]['x'],
		y = inputData[randomIndex]['y'],
		average,
		question3 = {};

	x=parseInt(x);
	y=parseInt(y);
	average=(2*x*y/(x+y));

	question3= {
		'type': 'single',
		'id': '043',
		'question': 'Distance between two stations A and B is 778km. A train covers the journey from A to B at '+x+'per hour and returns back to A with a uniform speed of '+y+'per hour. Find the average speed of the train during the whole journey',
		'options': {
			'A': average,
			'B': average +parseInt(Math.random()*10),
			'C': average- parseInt(Math.random()*10),
			'D': average*parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	return question3;
	
}
	

function problem044(){
		var inputData = [{
			'costprice': 30,
			'sellingprice':90
			},
			{
			'costprice': 27,
			'sellingprice': 28
			},
			{
			'costprice': 70,
			'sellingprice': 60
			},
			
			{
			'costprice': 110,
			'sellingprice':70
			}],
			randomIndex = getRandomNumber(inputData.length),
			costprice= inputData[randomIndex]['costprice'],
			sellingprice = inputData[randomIndex]['sellingprice'],
			
			
			costprice=parseInt(costprice);
			sellingprice=parseInt(sellingprice);
			gain=sellingprice-costprice;
			percentage=(gain/costprice*100);
			question4 = {};
			
	  question4= {
			'type': 'single',
			'id': '044',
			'question': 'A man buy an  article for'+costprice+' and sells it for'+sellingprice+'. Find his gain percent',
			'options': {
				'A': percentage-parseInt(Math.random()*10),
				'B': percentage+parseInt(Math.random()*10),
				'C': percentage-parseInt(Math.random()*10),
				'D': percentage
			},
			'answer': 'D',
			'author-id': '04'
		}
		return question4;
	
}
function problem045(){
		var inputData = [{
			'l': 14,
			'b':12,
			'h':9
			},
			{
			'l': 13,
			'b':10,
			'h':8
			},
			{
			'l': 12,
			'b':11,
			'h':7
			},
			
			{
			'l': 14,
			'b':2,
			'h':39
			}],
			randomIndex = getRandomNumber(inputData.length),
			l= inputData[randomIndex]['l'],
			b= inputData[randomIndex]['b'],
			h= inputData[randomIndex]['h'],
			
			l=parseInt(l);
			b=parseInt(b);
			h=parseInt(h);
			volume=(l*b*h);
			surfacearea=(2*(l*b+b*h+l*h));
			question5 = {};
			
			
	  question5= {
			'type': 'single',
			'id': '045',
			'question': 'Find the volume and area of a cuboid'+l+' long, '+b+'breath and'+h+' hight.',
			'options': {
				'A': surfacearea-parseInt(Math.random()*10),
				'B': surfacearea,
				'C': surfacearea-parseInt(Math.random()*10),
				'D': surfacearea+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question5;
	
}
function problem046(){
		var inputData = [{
			'sugar': 40,
			'litres':3
			},
			{
			'sugar': 44,
				'litres':2
			},
			{
			'sugar': 12,
				'litres':4
			},
			
			{
			'sugar': 80,
			
				'litres':12
			}],
			randomIndex = getRandomNumber(inputData.length),
			sugar= inputData[randomIndex]['sugar'],
			litres= inputData[randomIndex]['litres'],
			
			
		    sugar=parseInt(sugar/100);
			litres=parseInt(litres);
			quality=sugar*litres;
		    addedonelitres=litres+1;
		    percentage=(quality/addedonelitres)*100;
			question6 = {};
			
			
	  question6= {
			'type': 'single',
			'id': '046',
			'question': 'To a sugar solution of '+ litres+' containing '+sugar+', one litre of water is added.the percentage of sugar in the new solution is',
			'options': {
				'A': percentage-parseInt(Math.random()*10),
				'B': percentage-parseInt(Math.random()*10),
				'C': percentage,
				'D': percentage+parseInt(Math.random()*10)
			},
			'answer': 'c',
			'author-id': '04'
		}
		return question6;
	
}
	
function problem047(){
		var inputData = [{
			'inspectorrejects':8,
			'examine':2
			},
			{
			'inspectorrejects':4,
				'examine':3
			},
			{
			'inspectorrejects': 0.08,
				'examine':2
			},
			
			{
			'inspectorrejects': 0.13,
				'examine':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			inspectorrejects= inputData[randomIndex]['inspectorrejects'],
			examine= inputData[randomIndex]['examine'],
		    
			
			inspectorrejects=parseInt((inspectorrejects/100)*(1/100));
			
			x=(examine*100*inspectorrejects);
			question7 = {};
			
			
	  question7= {
			'type': 'single',
			'id': '047',
			'question': 'An'+inspectorrejects+'of the meters as defective.How many will he examine to reject 2?',
			'options': {
				'A':x-parseInt(Math.random()*10),
				'B':x,
				'C':x-parseInt(Math.random()*10),
				'D':x+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question7;
	
}
		
function problem048(){
		var inputData = [{
			'speedoftrain':8,
			'speedoftrain1':68,
			'distance':150
			},
			{
			'speedoftrain':4,
				'speedoftrain1':66,
			'distance':160
			},
			{
			'speedoftrain':2,
				'speedoftrain1':65,
			'distance':170
			},
			
			{
			'speedoftrain':6,
			'speedoftrain1':64,
			'distance':180
			}],
			randomIndex = getRandomNumber(inputData.length),
			speedoftrain= inputData[randomIndex]['speedoftrain'],
			speedoftrain1= inputData[randomIndex]['speedoftrain1'],
			distance= inputData[randomIndex]['distance'],
		    
			
			speedoftrain=parseInt(speedoftrain);
			speedoftrain1=parseInt(speedoftrain1-speedoftrain);
		    distance=parseInt(distance);
			speed=speedoftrain1*5/18;
		    time=distance*(1/speed);
			question8 = {};
	
	question8= {
			'type': 'single',
			'id': '048',
			'question': 'A train '+distance+'m long is running with a speed of '+speedoftrain1+'. in what time will it pass a man who is running at '+speedoftrain+'kmph in the same direction in which the train is going?',
			'options': {
				'A':time-parseInt(Math.random()*10),
				'B':time,
				'C':time-parseInt(Math.random()*10),
				'D':time+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question8;
	
}
function problem049(){
		var inputData = [{
			'u':15,
			'v':2.5
			},
			{
			'u':14,
				'v':3.5
			},
			{
			'u': 28,
				'v':2.6
			},
			
			{
			'u': 18,
				'v':10.5
			}],
			randomIndex = getRandomNumber(inputData.length),
			u= inputData[randomIndex]['u'],
			v= inputData[randomIndex]['v'],
		    
			
			 
			u=parseInt(u);
			v=parseFloat(v);
			still=(u-v);
		    current=(still-v);
			
			question9 = {};
			
			
	  question9= {
			'type': 'single',
			'id': '049',
			'question': 'A man speed with the current is '+u+'km/hr and the speed of the current is '+v+'km/hr the man is speed aganist current is',
			'options': {
				'A':current,
				'B':current-parseInt(Math.random()*10),
				'C':current-parseInt(Math.random()*10),
				'D':current+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question9;
	
}
		
function problem0410(){
		var inputData = [{
			'x':21000,
			'y':17500,
			'profit':26400
			},
			{
			'x':22000,
				'y':18500,
			'profit':27500
			},
			{
			'x':24000,
				'y':19500,
			'profit':28600
			},
			
			{
			'x':23000,
				'y':20800,
			'profit':29800
			}],
			randomIndex = getRandomNumber(inputData.length),
			x= inputData[randomIndex]['x'],
			y= inputData[randomIndex]['y'],
		    profit= inputData[randomIndex]['y'],
			
			
			x=parseInt(((x/100)/5)/7);
			y=parseInt(((y/100)/5)/7);
			profit=parseInt(profit);
		    totalprofitxandy=11;
			profitx=profit*(x/totalprofitxandy);
			
			question10 = {};
			
			
	  question10= {
			'type': 'single',
			'id': '0410',
			'question': 'X and Y invest rs.'+x+'and rs.'+y+'respectively in a business.At the end of the year, they make a profit of rs.'+profit+'.what is the share of X in the profit?',
			'options': {
				'A':profitx-parseInt(Math.random()*10),
				'B':profitx,
				'C':profitx-parseInt(Math.random()*10),
				'D':profitx+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question10;
	
}
		
function problem0411(){
		var inputData = [{
			'apple':420,
			'sells':40
			},
			{
			'apple':480,
				'sells':30
			},
			{
			'apple': 410,
				'sells':20
			},
			
			{
			'apple': 430,
				'sells':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			apple= inputData[randomIndex]['apple'],
			sells= inputData[randomIndex]['sells'],
		    
			
			
			apple=parseInt(apple);
			
			sells=parseInt(sells);
		    totalsells=100;
			selling=totalsells-sells;
		    price=parseFloat(selling/100);
		    price=x;
		    x=apple*100/selling;
			
			question11 = {};
			
			
	  question11= {
			'type': 'single',
			'id': '0411',
			'question': 'A fruit seller had some apples. He sells '+sells+'% apples and still has '+apple+' apples. Originally, he had',
			'options': {
				'A':x-parseInt(Math.random()*10),
				'B':x,
				'C':x-parseInt(Math.random()*10),
				'D':x+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question11;
	
}
function problem0412(){
		var inputData = [{
			'mp':35,
			'gp':8
			},
			{
			'mp':34,
				'gp':3
			},
			{
			'mp': 48,
				'gp':2
			},
			
			{
			'mp': 53,
				'gp':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			mp= inputData[randomIndex]['mp'],
			gp= inputData[randomIndex]['gp'],
		    
			
			cp=100;
		 
			mp=parseInt(mp);
		    mp=cp*(mp+cp)/cp;
			
			gp=parseInt(gp);
			sp=(100+gp)/100*cp;
			dp=(mp-sp)*cp/mp;
		
			question12 = {};
			
			
	  question12 = {
			'type': 'single',
			'id': '0412 ',
			'question': 'A trader keeps the marked price of an item '+mp+'% above its cost price. The percentage of discount allowed to gain '+gp+'% is',
			'options': {
				'A':dp-parseInt(Math.random()*10),
				'B':dp+parseInt(Math.random()*10),
				'C':dp-parseInt(Math.random()*10),
				'D':dp
			},
			'answer': 'D',
			'author-id': '04'
		}
		return question12 ;
	
}
function problem0413(){
		var inputData = [{
			'train1':7,
			'train2':8,
			'distance':400,
			'time':4
			},
			{
			'train1':8,
			'train2':9,
			'distance':600,
				'time':3
			},
			{
			'train1':10,
			'train2':11,
			'distance':500,
				'time':2
			},
			
			{
			'train1':12,
			'train2':13,
			'distance':300,
				'time':5
			}],
			randomIndex = getRandomNumber(inputData.length),
			train1= inputData[randomIndex]['train1'],
			train2= inputData[randomIndex]['train2'],
		    distance= inputData[randomIndex]['distance'],
			time= inputData[randomIndex]['time'],
			
			 train1=parseInt(train1);
			 train2=parseInt(train2);
			 distance=parseInt(distance);
			 time=parseInt( time);
			 speed=(distance/time)/train2;
			 firsttrain=train1*speed;
			
			question13= {};
			
			
	  question13= {
			'type': 'single',
			'id': '0413',
			'question': 'The ratio between the speed of two train is '+train1+':'+train2+'.If the second train runs '+distance+' km in '+time+'hours, then the speed of the first train is?',
			'options': {
				'A':firsttrain-parseInt(Math.random()*10),
				'B':firsttrain,
				'C':firsttrain-parseInt(Math.random()*10),
				'D':firsttrain+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question13;
	
}
function problem0414(){
		var inputData = [{
			'swimwater':4,
			'speedwater':2,
			'distance':6
			},
			{
			'swimwater':5,
			'speedwater':3,
				'distance':7
			},
			{
			'swimwater':6,
			'speedwater':4,
				'distance':8
			},
			
			{
			'swimwater':7,
			'speedwater':5,
				'distance':9
			}],
			randomIndex = getRandomNumber(inputData.length),
			swimwater= inputData[randomIndex]['swimwater'],
			speedwater= inputData[randomIndex]['speedwater'],
		    distance= inputData[randomIndex]['distance'],
			
			swimwater=parseInt(swimwater);
			speedwater=parseInt(speedwater);
			distance=parseInt(distance);
			upstream=swimwater-speedwater;
		    time=distance/upstream;
			
			
			question14 = {};
			
			
	  question14= {
			'type': 'single',
			'id': '0414',
			'question': 'A person can swim in water at '+swimwater+' km/h. If the speed of water '+speedwater+'km/h, how many hours will the man take to swim back against the current for '+distance+'km?',
			'options': {
				'A':time,
				'B':time-parseInt(Math.random()*10),
				'C':time-parseInt(Math.random()*10),
				'D':time+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question14;
	
}
		
function problem0415(){
		var inputData = [{
			'student1':90,
			'student2':80,
			'student3':54
			},
			{
			'student1':80,
			'student2':88,
			'student3':64
			},
			{
			'student1':60,
			'student2':84,
			'student3':74
			},
			
			{
			'student1':50,
			'student2':85,
			'student3':84
			}],
			randomIndex = getRandomNumber(inputData.length),
			student1= inputData[randomIndex]['student1'],
			student2= inputData[randomIndex]['student2'],
		    student3 = inputData[randomIndex]['student3'],
			
			
			student1=parseFloat(student1/100);
			student2=parseFloat(student2/100);
			student3=parseFloat(student3/100);
			testp1=100;
			testp2=150;
			testp3=200;
			st1=student1*testp1;
		    st2=student2*testp2;
			st3=student3*testp3;
			total=st1+st2+st3;
			markt=testp1+testp2+testp3;
		    per=(total/markt)*100;
			
			question15 = {};
			
			
	  question15= {
			'type': 'single',
			'id': '0415',
			'question': 'A student scores '+student1+','+student2+', '+student1+'marks in a test paper of 100, 150, 200 respectively as maximum marks. What is the total percentage?',
			'options': {
				'A':per-parseInt(Math.random()*10),
				'B':per,
				'C':per-parseInt(Math.random()*10),
				'D':per+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question15;
	
}
function problem0416(){
		var inputData = [{
			'sp':490,
			'cp':465.50
			},
			
			{
			'sp': 480,
				'cp':456.00
			},
			{
			'sp': 470,
				'cp':43.50
			},
			
			{
			'sp': 460,
				'cp':45.00
			}],
			randomIndex = getRandomNumber(inputData.length),
			cp= inputData[randomIndex]['cp'],
			sp= inputData[randomIndex]['sp'],
		    
			
			
			cp=parseInt(cp);
			
			sp=parseFloat(sp);
			 
			loss=cp-sp;
			losspercentage=(loss/cp)*100;
			
			question16 = {};
			
			
	  question16= {
			'type': 'single',
			'id': '0416',
			'question': 'If a radio is purchased for Rs.'+sp+' and sold for Rs.'+cp+',Find the loss percent',
			'options': {
				'A':losspercentage,
				'B':losspercentage+parseInt(Math.random()*10),
				'C':losspercentage-parseInt(Math.random()*10),
				'D':losspercentage-parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question16;
	
}
		
function problem0417(){
		var inputData = [{
			'speed':80
			},
			{
			
				'speed':30
			},
			{
			
				'speed':20
			},
			
			{
			
				'speed':50
			}],
			randomIndex = getRandomNumber(inputData.length),
			
			speed= inputData[randomIndex]['speed'],
		    
			
			
			speed=parseInt(speed);
			speed1=speed*(5/18);
			
			question17 = {};
			
			
	  question17= {
			'type': 'single',
			'id': '0417',
			'question': 'A car moves at the speed of '+speed+'km/hr. What is the speed of the car in metres per second',
			'options': {
				'A':speed1-parseInt(Math.random()*10),
				'B':speed1,
				'C':speed1-parseInt(Math.random()*10),
				'D':speed1+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question17;
	
}
		
function problem0418(){
		var inputData = [{
			'speed':144,
			'distance':100
			},
			{
			'speed':166,
				'distance':50
			},
			{
			'speed': 122,
			'distance':20
			},
			
			{
			'speed': 100,
			'distance':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			speed= inputData[randomIndex]['speed'],
			distance= inputData[randomIndex]['distance'],
		    
			
			
			speed=parseInt(speed*(5/18));
			
			distance=parseInt(distance);
			
			 time=distance/speed;
			
			question18 = {};
			
			
	  question18= {
			'type': 'single',
			'id': '0418',
			'question': 'In what time will a train '+distance+'meters long cross an electric pole,if its speed be '+speed+'km/hr',
			'options': {
				'A':time-parseInt(Math.random()*10),
				'B':time-parseInt(Math.random()*10),
				'C':time,
				'D':time+parseInt(Math.random()*10)
			},
			'answer': 'C',
			'author-id': '04'
		}
		return question18;
	
}
		
function problem0419(){
		var inputData = [{
			'downstream':13,
			'upstream':8
			},
			{
			'downstream':12,
			'upstream':2
			},
			{
			'downstream':10,
				'upstream':4
			},
			
			{
			'downstream':16,
				'upstream':5
			}],
			randomIndex = getRandomNumber(inputData.length),
			downstream= inputData[randomIndex]['downstream'],
			upstream= inputData[randomIndex]['upstream'],
		    
			
			
			downstream=parseInt(downstream);
			
			upstream=parseInt(upstream);
			
			speed=1/2*(downstream-upstream);
			
			question19 = {};
			
			
	  question19= {
			'type': 'single',
			'id': '0419',
			'question': 'A man rows upstream at '+upstream+' kmph and downstream at '+downstream+' kmph. the speed of the stream is',
			'options': {
				'A':speed-parseInt(Math.random()*10),
				'B':speed,
				'C':speed-parseInt(Math.random()*10),
				'D':speed+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question19;
	
}
		
function problem0420(){
		var inputData = [{
			's':4016.25,
			'r':9,
			't':5
			},
			{
			's':4006.05,
			'r':8,
				't':4
			},
			{
			's':3016.15,
			'r':6,
				't':3
			},
			
			{
			's':5016.25,
			'r':4,
				't':2
			}],
			randomIndex = getRandomNumber(inputData.length),
			s= inputData[randomIndex]['s'],
			r= inputData[randomIndex]['r'],
		    t= inputData[randomIndex]['t'],
			
		    
		    s=parseInt(s);
		   
		   r=parseInt(r);
		   
		   t=parseInt(t);
		   
		    p=(100*s)/(r*t);
		   
			question20= {};
			
			
	  question20= {
			'type': 'single',
			'id': '0420',
			'question': 'A sum fetched a total simple interest of rs.'+s+'at the rate of '+r+'p.c.p.a. in '+t+'years what is the sum?',
			'options': {
				'A':p,
				'B':p-parseInt(Math.random()*10),
				'C':p-parseInt(Math.random()*10),
				'D':p+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question20;
	
}
		
		
		
		
			
	
	
