import { Component, OnInit } from '@angular/core';
import { MaterialsService } from './materials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materialspage',
  templateUrl: './materialspage.component.html',
  styleUrls: ['./materialspage.component.css']
})
export class MaterialspageComponent implements OnInit {

  constructor(private service: MaterialsService, private route: Router) { }
  getUser: any = '';
  ngOnInit() {
    const data = sessionStorage.getItem('loginUser');
    if (data) {
      this.getUser = JSON.parse(data);
    }
  }

  csefirstpevideo() {
    this.service.materials = "Professionalethicsvideo"
    this.route.navigate(['CSENotespage']);
  }
  csefirstpenotes() {
    this.service.materials = "Professionalethicsnotes"
    this.route.navigate(['CSENotespage']);
  }
  csefirstpeqp() {
    this.service.materials = "Professionalethicsqp"
    this.route.navigate(['CSENotespage']);
  }
  csefirstpesb() {
    this.service.materials = "Professionalethicssb"
    this.route.navigate(['CSENotespage']);
  }



  csefirstcnvideo() {
    this.service.materials = "ComputerNetworksvideo"
    this.route.navigate(['CSENotespage']);
  }
  csefirstcnnotes() {
    this.service.materials = "ComputerNetworksnotes"
    this.route.navigate(['CSENotespage']);
  }
  csefirstcnqp() {
    this.service.materials = "ComputerNetworksqp"
    this.route.navigate(['CSENotespage']);
  }
  csefirstcnsb() {
    this.service.materials = "ComputerNetworkssb"
    this.route.navigate(['CSENotespage']);
  }




  csesecondEDv() {
    this.service.materials = "Entrepreneurshipv"
    this.route.navigate(['CSENotespage']);
  }
  csesecondEDn() {
    this.service.materials = "Entrepreneurshipn"
    this.route.navigate(['CSENotespage']);
  }
  csesecondEDqp() {
    this.service.materials = "Entrepreneurshipqp"
    this.route.navigate(['CSENotespage']);
  }
  csesecondEDsb() {
    this.service.materials = "Entrepreneurshipsb"
    this.route.navigate(['CSENotespage']);
  }




  csesecondccv() {
    this.service.materials = "cloudcomputingv"
    this.route.navigate(['CSENotespage']);
  }
  csesecondccn() {
    this.service.materials = "cloudcomputingn"
    this.route.navigate(['CSENotespage']);
  }
  csesecondccqp() {
    this.service.materials = "cloudcomputingqp"
    this.route.navigate(['CSENotespage']);
  }
  csesecondccsb() {
    this.service.materials = "cloudcomputingsb"
    this.route.navigate(['CSENotespage']);
  }



  csethirdmcv() {
    this.service.materials = "machinelearningv"
    this.route.navigate(['CSENotespage']);
  }

  csethirdmcn() {
    this.service.materials = "machinelearningn"
    this.route.navigate(['CSENotespage']);
  }
  csethirdmcqp() {
    this.service.materials = "machinelearningqp"
    this.route.navigate(['CSENotespage']);
  }
  csethirdmcsb() {
    this.service.materials = "machinelearningsb"
    this.route.navigate(['CSENotespage']);
  }



  csethirdjv() {
    this.service.materials = "javav"
    this.route.navigate(['CSENotespage']);
  }
  csethirdjn() {
    this.service.materials = "javan"
    this.route.navigate(['CSENotespage']);
  }
  csethirdjqp() {
    this.service.materials = "javaqp"
    this.route.navigate(['CSENotespage']);
  }
  csethirdjsb() {
    this.service.materials = "javasb"
    this.route.navigate(['CSENotespage']);
  }



  csefinalosvideo() {
    this.service.materials = "operatingsystemv"
    this.route.navigate(['CSENotespage']);
  }
  csefinalosn() {
    this.service.materials = "operatingsystemn"
    this.route.navigate(['CSENotespage']);
  }
  csefinalosqp() {
    this.service.materials = "operatingsystemqp"
    this.route.navigate(['CSENotespage']);
  }
  csefinalossb() {
    this.service.materials = "operatingsystemsb"
    this.route.navigate(['CSENotespage']);
  }



  csefinalcgvideo() {
    this.service.materials = "cryptographyv"
    this.route.navigate(['CSENotespage']);
  }
  csefinalcgn() {
    this.service.materials = "cryptographyn"
    this.route.navigate(['CSENotespage']);
  }
  csefinalcgqp() {
    this.service.materials = "cryptographyqp"
    this.route.navigate(['CSENotespage']);
  }
  csefinalcgsb() {
    this.service.materials = "cryptographysb"
    this.route.navigate(['CSENotespage']);
  }



  ecefirstlav() {
    this.service.materials = "linearalegbrav"
    this.route.navigate(['CSENotespage']);
  }
  ecefirstlan() {
    this.service.materials = "linearalegbran"
    this.route.navigate(['CSENotespage']);
  }
  ecefirstlaqp() {
    this.service.materials = "linearalegbraqp"
    this.route.navigate(['CSENotespage']);
  }
  ecefirstlasb() {
    this.service.materials = "linearalegbrasb"
    this.route.navigate(['CSENotespage']);
  }



  ecefirstmpv() {
    this.service.materials = "Microprocessorv"
    this.route.navigate(['CSENotespage']);
  }
  ecefirstmpn() {
    this.service.materials = "Microprocessorn"
    this.route.navigate(['CSENotespage']);
  }
  ecefirstmpqp() {
    this.service.materials = "Microprocessorqp"
    this.route.navigate(['CSENotespage']);
  }
  ecefirstmpsb() {
    this.service.materials = "Microprocessorsb"
    this.route.navigate(['CSENotespage']);
  }



  ecesecondviv() {
    this.service.materials = "vlsiv"
    this.route.navigate(['CSENotespage']);
  }
  ecesecondvin() {
    this.service.materials = "vlsin"
    this.route.navigate(['CSENotespage']);
  }
  ecesecondviqp() {
    this.service.materials = "vlsiqp"
    this.route.navigate(['CSENotespage']);
  }
  ecesecondvisb() {
    this.service.materials = "vlsisb"
    this.route.navigate(['CSENotespage']);
  }



  ecesecondadv() {
    this.service.materials = "analogdigv"
    this.route.navigate(['CSENotespage']);
  }
  ecesecondadn() {
    this.service.materials = "analogdign"
    this.route.navigate(['CSENotespage']);
  }

  ecesecondadqp() {
    this.service.materials = "analogdigqp"
    this.route.navigate(['CSENotespage']);
  }

  ecesecondadsb() {
    this.service.materials = "analogdigsb"
    this.route.navigate(['CSENotespage']);
  }



  ecethirdicv() {
    this.service.materials = "IntegretedCircuitv"
    this.route.navigate(['CSENotespage']);
  }
  ecethirdicn() {
    this.service.materials = "IntegretedCircuitn"
    this.route.navigate(['CSENotespage']);
  }

  ecethirdicqp() {
    this.service.materials = "IntegretedCircuitqp"
    this.route.navigate(['CSENotespage']);
  }

  ecethirdicsb() {
    this.service.materials = "IntegretedCircuitsb"
    this.route.navigate(['CSENotespage']);
  }


  ecethirdawv() {
    this.service.materials = "Antennawavev"
    this.route.navigate(['CSENotespage']);
  }
  ecethirdawn() {
    this.service.materials = "Antennawaven"
    this.route.navigate(['CSENotespage']);
  }
  ecethirdawqp() {
    this.service.materials = "Antennawaveqp"
    this.route.navigate(['CSENotespage']);
  }
  ecethirdawsb() {
    this.service.materials = "Antennawavesb"
    this.route.navigate(['CSENotespage']);
  }



  ecefinalphv() {
    this.service.materials = "pythonv"
    this.route.navigate(['CSENotespage']);
  }
  ecefinalphn() {
    this.service.materials = "pythonn"
    this.route.navigate(['CSENotespage']);
  }
  ecefinalphqp() {
    this.service.materials = "pythonqp"
    this.route.navigate(['CSENotespage']);
  }
  ecefinalphsb() {
    this.service.materials = "pythonsb"
    this.route.navigate(['CSENotespage']);
  }


  ecefinalesv(){
    this.service.materials = "embeddedsysv"
    this.route.navigate(['CSENotespage']);
  }
  ecefinalesn(){
    this.service.materials = "embeddedsysn"
    this.route.navigate(['CSENotespage']);
  }
  ecefinalesqp(){
    this.service.materials = "embeddedsysqp"
    this.route.navigate(['CSENotespage']);
  }
  ecefinalessb(){
    this.service.materials = "embeddedsyssb"
    this.route.navigate(['CSENotespage']);
  }



  eeefirstecav(){
    this.service.materials = "eletricanalaysisv"
    this.route.navigate(['CSENotespage']);
  }
  eeefirstecan(){
    this.service.materials = "eletricanalaysisn"
    this.route.navigate(['CSENotespage']);
  }
  eeefirstecaqp(){
    this.service.materials = "eletricanalaysisqp"
    this.route.navigate(['CSENotespage']);
  }
  eeefirstecasb(){
    this.service.materials = "eletricanalaysissb"
    this.route.navigate(['CSENotespage']);
  }


  eeefirstaev(){
    this.service.materials = "analogelectricv"
    this.route.navigate(['CSENotespage']);
  }
  eeefirstaen(){
    this.service.materials = "analogelectricn"
    this.route.navigate(['CSENotespage']);
  }
  eeefirstaeqp(){
    this.service.materials = "analogelectricqp"
    this.route.navigate(['CSENotespage']);
  }
  eeefirstaesb(){
    this.service.materials = "analogelectricsb"
    this.route.navigate(['CSENotespage']);
  }


  eeesecondcsv(){
    this.service.materials = "circuitsysv"
    this.route.navigate(['CSENotespage']);
  }
  eeesecondcsn(){
    this.service.materials = "circuitsysn"
    this.route.navigate(['CSENotespage']);
  }
  eeesecondcsqp(){
    this.service.materials = "circuitsysqp"
    this.route.navigate(['CSENotespage']);
  }
  eeesecondcssb(){
    this.service.materials = "circuitsyssb"
    this.route.navigate(['CSENotespage']);
  }



  eeesecondmcrv(){
    this.service.materials = "microcontrollerv"
    this.route.navigate(['CSENotespage']);
  }
  eeesecondmcrn(){
    this.service.materials = "microcontrollern"
    this.route.navigate(['CSENotespage']);
  }
  eeesecondmcrqp(){
    this.service.materials = "microcontrollerqp"
    this.route.navigate(['CSENotespage']);
  }
  eeesecondmcrsb(){
    this.service.materials = "microcontrollersb"
    this.route.navigate(['CSENotespage']);
  }


  eeethirdpesv(){
    this.service.materials = "powerelectronicv"
    this.route.navigate(['CSENotespage']);
  }
  eeethirdpesn(){
    this.service.materials = "powerelectronicn"
    this.route.navigate(['CSENotespage']);
  }
  eeethirdpesqp(){
    this.service.materials = "powerelectronicqp"
    this.route.navigate(['CSENotespage']);
  }
  eeethirdpessb(){
    this.service.materials = "powerelectronicsb"
    this.route.navigate(['CSENotespage']);
  }


  eeethirdtmv(){
    this.service.materials = "Transmissionv"
    this.route.navigate(['CSENotespage']);
  }
  eeethirdtmn(){
    this.service.materials = "Transmissionn"
    this.route.navigate(['CSENotespage']);
  }
  eeethirdtmqp(){
    this.service.materials = "Transmissionqp"
    this.route.navigate(['CSENotespage']);
  }
  eeethirdtmsb(){
    this.service.materials = "Transmissionsb"
    this.route.navigate(['CSENotespage']);
  }


  eeefinalemiv(){
    this.service.materials = "electricinsmeasv"
    this.route.navigate(['CSENotespage']);
  }
  eeefinalemin(){
    this.service.materials = "electricinsmeasn"
    this.route.navigate(['CSENotespage']);
  }
  eeefinalemiqp(){
    this.service.materials = "electricinsmeasqp"
    this.route.navigate(['CSENotespage']);
  }
  eeefinalemisb(){
    this.service.materials = "electricinsmeassb"
    this.route.navigate(['CSENotespage']);
  }



  eeefinalehvv(){
    this.service.materials = "electichybridvehv"
    this.route.navigate(['CSENotespage']);
  }
  eeefinalehvn(){
    this.service.materials = "electichybridvehn"
    this.route.navigate(['CSENotespage']);
  }
  eeefinalehvqp(){
    this.service.materials = "electichybridvehqp"
    this.route.navigate(['CSENotespage']);
  }
  eeefinalehvsb(){
    this.service.materials = "electichybridvehsb"
    this.route.navigate(['CSENotespage']);
  }




  ITfirstcpv(){
    this.service.materials = "Cprogramv"
    this.route.navigate(['CSENotespage']);
  }
  ITfirstcpn(){
    this.service.materials = "Cprogramn"
    this.route.navigate(['CSENotespage']);
  }
  ITfirstcpqp(){
    this.service.materials = "Cprogramqp"
    this.route.navigate(['CSENotespage']);
  }
  ITfirstcpsb(){
    this.service.materials = "Cprogramsb"
    this.route.navigate(['CSENotespage']);
  }


  ITfirstcplusv(){
    this.service.materials = "C++programv"
    this.route.navigate(['CSENotespage']);
  }
  ITfirstcplusn(){
    this.service.materials = "C++programn"
    this.route.navigate(['CSENotespage']);
  }
  ITfirstcplusqp(){
    this.service.materials = "C++programqp"
    this.route.navigate(['CSENotespage']);
  }
  ITfirstcplussb(){
    this.service.materials = "C++programsb"
    this.route.navigate(['CSENotespage']);
  }



  ITseconddsv(){
    this.service.materials = "Datastructurev"
    this.route.navigate(['CSENotespage']);
  }
  ITseconddsn(){
    this.service.materials = "Datastructuren"
    this.route.navigate(['CSENotespage']);
  }
  ITseconddsqp(){
    this.service.materials = "Datastructureqp"
    this.route.navigate(['CSENotespage']);
  }
  ITseconddssb(){
    this.service.materials = "Datastructuresb"
    this.route.navigate(['CSENotespage']);
  }

  ITsecondamv(){
    this.service.materials = "Agilemethodv"
    this.route.navigate(['CSENotespage']);
  }
  ITsecondamn(){
    this.service.materials = "Agilemethodn"
    this.route.navigate(['CSENotespage']);
  }
  ITsecondamqp(){
    this.service.materials = "Agilemethodqp"
    this.route.navigate(['CSENotespage']);
  }
  ITsecondamsb(){
    this.service.materials = "Agilemethodsb"
    this.route.navigate(['CSENotespage']);
  }



  ITthirdtcv(){
    this.service.materials = "telecommunicationv"
    this.route.navigate(['CSENotespage']);
  }

  ITthirdtcn(){
    this.service.materials = "telecommunicationn"
    this.route.navigate(['CSENotespage']);
  }

  ITthirdtcqp(){
    this.service.materials = "telecommunicationqp"
    this.route.navigate(['CSENotespage']);
  }

  ITthirdtcsb(){
    this.service.materials = "telecommunicationsb"
    this.route.navigate(['CSENotespage']);
  }



  ITthirdsadv(){
    this.service.materials = "analysissystemv"
    this.route.navigate(['CSENotespage']);
  }

  ITthirdsadn(){
    this.service.materials = "analysissystemn"
    this.route.navigate(['CSENotespage']);
  }

  ITthirdsadqp(){
    this.service.materials = "analysissystemqp"
    this.route.navigate(['CSENotespage']);
  }

  ITthirdsadsb(){
    this.service.materials = "analysissystemsb"
    this.route.navigate(['CSENotespage']);
  }



  ITfinalsev(){
    this.service.materials = "softwareengv"
    this.route.navigate(['CSENotespage']);
  }

  ITfinalsen(){
    this.service.materials = "softwareengn"
    this.route.navigate(['CSENotespage']);
  }

  ITfinalseqp(){
    this.service.materials = "softwareengqp"
    this.route.navigate(['CSENotespage']);
  }

  ITfinalsesb(){
    this.service.materials = "softwareengsb"
    this.route.navigate(['CSENotespage']);
  }




  ITfinalgmv(){
    this.service.materials = "Graphicsmediav"
    this.route.navigate(['CSENotespage']);
  }

  ITfinalgmn(){
    this.service.materials = "Graphicsmedian"
    this.route.navigate(['CSENotespage']);
  }

  ITfinalgmqp(){
    this.service.materials = "Graphicsmediaqp"
    this.route.navigate(['CSENotespage']);
  }

  ITfinalgmsb(){
    this.service.materials = "Graphicsmediasb"
    this.route.navigate(['CSENotespage']);
  }

}
