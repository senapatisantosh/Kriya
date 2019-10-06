import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SimpleMenu } from 'simple-sidenav';
import { SimpleAnimation } from 'simple-sidenav/lib/interfaces/simple-animation';
import { Router, RouterEvent, NavigationEnd, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-htc-doc',
  templateUrl: './htc-doc.component.html',
  styleUrls: ['./htc-doc.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HtcDocComponent implements OnInit {
  data: any[] = new Array();
  header: string;
  activeId: string = "1";
  menu: SimpleMenu[] = [
    {
      "id": "1", "name": "Components Overview", "icon": ""
    },
    {
      "id": "2", "name": "Frontend Component", "icon": "", "menu": [
        {
          "id": "21", "name": "Global", "menu": [
            { "id": "211", "name": "Layout" },
            { "id": "212", "name": "Card" },
            { "id": "213", "name": "Accordion" },
            { "id": "214", "name": "Flip Card" },
            { "id": "215", "name": "Grid" },
            { "id": "216", "name": "Stepper" },
            { "id": "217", "name": "Grid Infinite Scroll" }
          ]
        },
        {
          "id": "22", "name": "Navigation", "menu": [
            { "id": "221", "name": "Action" },
            { "id": "222", "name": "Menu" },
            { "id": "223", "name": "Side bar" },
            { "id": "224", "name": "Tabs" }
          ]
        },
        {
          "id": "23", "name": "Form", "menu": [
            { "id": "231", "name": "Button" },
            { "id": "232", "name": "Check box" },
            { "id": "233", "name": "Date picker" },
            { "id": "234", "name": "Input" },
            { "id": "235", "name": "Radio button" },
            { "id": "236", "name": "Dropdown" }
          ]
        },
        {
          "id": "24", "name": "Extra", "menu": [
            { "id": "241", "name": "Alert" },
            { "id": "242", "name": "Badge" },
            { "id": "243", "name": "Calendar" },
            { "id": "244", "name": "Dialog" },
            { "id": "245", "name": "Progress bar" },
            { "id": "246", "name": "Search" },
            { "id": "247", "name": "Spinner" },
            { "id": "248", "name": "Notification" },
            { "id": "249", "name": "Tooltip" },
            { "id": "2410", "name": "User (Avatar)" }
          ]
        }
      ]
    },
    {
      "id": "3", "name": "Backend Component", "icon": "", "menu": [
        { "id": "31", "name": "Activity Logger" },
        { "id": "32", "name": "Caching" },
        { "id": "33", "name": "Error logger" },
        { "id": "34", "name": "Email" },
        { "id": "35", "name": "Queue" },
        { "id": "36", "name": "Scheduler" }
      ]
    },
    {
      "id": "4", "name": "Services", "icon": "", "menu": [
        { "id": "41", "name": "Power Drive" },
        { "id": "42", "name": "Letter generator" }
      ]
    },
    {
      "id": "5", "name": "Security", "icon": "", "menu": [
        { "id": "51", "name": "Account Management" },
        { "id": "52", "name": "Code Obfuscation" },
        { "id": "53", "name": "Code Signing" },
        { "id": "54", "name": "Secure Software Development Life Cycle" }
      ]
    },
    {
      "id": "6", "name": "Usability", "icon": "", "menu": [
        { "id": "61", "name": "Right to Left" }
      ]
    }
  ];
  animation: SimpleAnimation = {
    in: { value: 'slide-in-stagger' },
    out: { value: 'slide-out', duration: 200 }
  };
  constructor(private router: Router) {

    this.menu.forEach(x => {
      this.data.push({ 'id': x.id.toString(), 'name': x.name });
      if (typeof x.menu !== "undefined") {
        x.menu.forEach(y => {
          this.data.push({ 'id': y.id.toString(), 'name': y.name });
          if (typeof y.menu !== "undefined") {
            y.menu.forEach(z => {
              this.data.push({ 'id': z.id.toString(), 'name': z.name });
            });
          }
        });
      }
    });


    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) 
      {
        console.log(this.router.navigated);
        this.router.navigated = false;
        this.header = event.url.split("/")[event.url.split("/").length - 1].replace(/_/g, ' ');
        this.activeId = this.findActiveId(this.header);
        console.log(this.router.navigated);
        switch (event.url) {
          case "/Documentaion":
            {
              this.header = "Components Overview";
              break;
            }
          default:
            {
              break;
            }
        }
        window.scrollTo(0, 0);
      }
      if (event instanceof NavigationStart) {
        
      }
    })
  }

  ngOnInit() {}

  onClick(item: { id: number | string, name: string, icon: string, index: number }) {
    let returnUrl: string;
    returnUrl = this.constructRouterlink(Number(item.id), item.name);
    this.router.navigate(["/Documentaion/" + returnUrl]);
  }

  constructRouterlink(id: number, name: string) {
    let rem: number;
    let flag: number = 0;
    let link: string;
    while (id != 0) {
      rem = id % 10;
      id = Math.floor(id / 10);
      flag++;
    }
    link = this.menu.filter(x => Number(x.id) == rem)[0].name.replace(/ /g, '_');
    if (flag > 1) {
      link = link + "/" + name.replace(/ /g, '_');
    }
    return link;
  }

  findActiveId(name: string) {
    let tempId: string = "";
    tempId = this.data.filter(x => x.name == name)[0].id;
    console.log(tempId);
    return tempId;
  }
}
