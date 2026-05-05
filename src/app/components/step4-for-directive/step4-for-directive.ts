import { Component } from '@angular/core';
import { IPerson } from '../../shared/interface/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  persons: IPerson[] = [
    {"firstname":"Roman","lastname":"Beardsworth","email":"rbeardsworth0@mysql.com"},
    {"firstname":"Christoper","lastname":"McHaffy","email":"cmchaffy1@wikipedia.org"},
    {"firstname":"Cass","lastname":"Billiard","email":"cbilliard2@bing.com"},
    {"firstname":"Carlo","lastname":"Parris","email":"cparris3@multiply.com"},
    {"firstname":"Sharron","lastname":"Vanin","email":"svanin4@privacy.gov.au"},
    {"firstname":"Cathlene","lastname":"Pattemore","email":"cpattemore5@t-online.de"},
    {"firstname":"Antonella","lastname":"Gabbitis","email":"agabbitis6@dyndns.org"},
    {"firstname":"Dick","lastname":"Blackmoor","email":"dblackmoor7@360.cn"},
    {"firstname":"Wynn","lastname":"Heasly","email":"wheasly8@washingtonpost.com"},
    {"firstname":"Kirk","lastname":"Reese","email":"kreese9@ucsd.edu"},
    {"firstname":"Lucinda","lastname":"Hugk","email":"lhugka@deviantart.com"},
    {"firstname":"Thorny","lastname":"Gatsby","email":"tgatsbyb@indiatimes.com"},
    {"firstname":"Margo","lastname":"O'Towey","email":"motoweyc@ca.gov"},
    {"firstname":"Betsey","lastname":"Tetley","email":"btetleyd@hud.gov"},
    {"firstname":"Kanya","lastname":"O'Neill","email":"koneille@newyorker.com"},
    {"firstname":"Corrie","lastname":"Stango","email":"cstangof@google.co.uk"},
    {"firstname":"Joellen","lastname":"Aguirrezabala","email":"jaguirrezabalag@deviantart.com"},
    {"firstname":"Lacie","lastname":"Pinnigar","email":"lpinnigarh@ocn.ne.jp"},
    {"firstname":"Kat","lastname":"Yve","email":"kyvei@slate.com"},
    {"firstname":"Rhiamon","lastname":"Ferrelli","email":"rferrellij@about.me"},
    {"firstname":"Rickey","lastname":"Masterton","email":"rmastertonk@skype.com"},
    {"firstname":"Tammara","lastname":"Greaterex","email":"tgreaterexl@usa.gov"},
    {"firstname":"Johnnie","lastname":"Ayscough","email":"jayscoughm@360.cn"},
    {"firstname":"Norby","lastname":"Lefwich","email":"nlefwichn@berkeley.edu"},
    {"firstname":"Rebe","lastname":"Madge","email":"rmadgeo@sohu.com"},
    {"firstname":"Evvie","lastname":"Refford","email":"ereffordp@storify.com"},
    {"firstname":"Judi","lastname":"Amner","email":"jamnerq@xrea.com"},
    {"firstname":"Walther","lastname":"Runchman","email":"wrunchmanr@pcworld.com"},
    {"firstname":"Carmelina","lastname":"Moxham","email":"cmoxhams@about.com"},
    {"firstname":"Fabio","lastname":"Wernher","email":"fwernhert@answers.com"}
]
}
