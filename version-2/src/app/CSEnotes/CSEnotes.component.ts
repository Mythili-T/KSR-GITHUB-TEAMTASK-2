import { Component, OnInit } from '@angular/core';
import { MaterialsService } from '../materialspage/materials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-CSEnotes',
  templateUrl: './CSEnotes.component.html',
  styleUrls: ['./CSEnotes.component.css']
})
export class CSEnotesComponent implements OnInit {

  constructor(private service:MaterialsService,private route:Router) { }


  PEv:boolean=false;
  PEn:boolean=false;
  PEq:boolean=false;
  PEs:boolean=false;

  CNv:boolean=false;
  CNn:boolean=false;
  CNq:boolean=false
  CNs:boolean=false;

  EDv:boolean=false;
  EDn:boolean=false;
  EDqp:boolean=false;
  EDsb:boolean=false;

  CCv:boolean=false;
  CCn:boolean=false;
  CCqp:boolean=false;
  CCsb:boolean=false;

  MCv:boolean=false;
  MCn:boolean=false;
  MCqp:boolean=false;
  MCsb:boolean=false;

  Jv:boolean=false;
  Jn:boolean=false;
  Jqp:boolean=false;
  Jsb:boolean=false;

  OSv:boolean=false;
  OSn:boolean=false;
  OSqp:boolean=false;
  OSsb:boolean=false;

  CGsb:boolean=false;
  CGv:boolean=false;
  CGn:boolean=false;
  CGqp:boolean=false;

  LAv:boolean=false;
  LAn:boolean=false;
  LAqp:boolean=false;
  LAsb:boolean=false;

  MPv:boolean=false;
  MPn:boolean=false;
  MPqp:boolean=false;
  MPsb:boolean=false;

  VLv:boolean=false;
  VLn:boolean=false;
  VLqp:boolean=false;
  VLsb:boolean=false;

  ADv:boolean=false;
  ADn:boolean=false;
  ADqp:boolean=false;
  ADsb:boolean=false;

  ICv:boolean=false;
  ICn:boolean=false;
  ICqp:boolean=false;
  ICsb:boolean=false;

  AWv:boolean=false;
  AWn:boolean=false;
  AWqp:boolean=false;
  AWsb:boolean=false;


  PHv:boolean=false;
  PHn:boolean=false;
  PHqp:boolean=false;
  PHsb:boolean=false;

 ESv:boolean=false;
 ESn:boolean=false;
 ESqp:boolean=false;
 ESsb:boolean=false;


 ECAv:boolean=false;
 ECAn:boolean=false;
 ECAqp:boolean=false;
 ECAsb:boolean=false;

 AEv:boolean=false;
 AEn:boolean=false;
 AEqp:boolean=false;
 AEsb:boolean=false;

 CSv:boolean=false;
 CSn:boolean=false;
 CSqp:boolean=false;
 CSsb:boolean=false;

 MCRv:boolean=false;
 MCRn:boolean=false;
 MCRqp:boolean=false;
 MCRsb:boolean=false;

 PESv:boolean=false;
 PESn:boolean=false;
 PESqp:boolean=false;
 PESsb:boolean=false;

 TMv:boolean=false;
 TMn:boolean=false;
 TMqp:boolean=false;
 TMsb:boolean=false;

 EMIv:boolean=false;
 EMIn:boolean=false;
 EMIqp:boolean=false;
 EMIsb:boolean=false;

 EHVv:boolean=false;
 EHVn:boolean=false;
 EHVqp:boolean=false;
 EHVsb:boolean=false;

 CPv:boolean=false;
 CPn:boolean=false;
 CPqp:boolean=false;
 CPsb:boolean=false;

 CPPv:boolean=false;
 CPPn:boolean=false;
 CPPqp:boolean=false;
 CPPsb:boolean=false;

 DSv:boolean=false;
 DSn:boolean=false;
 DSqp:boolean=false;
 DSsb:boolean=false;

 AMv:boolean=false;
 AMn:boolean=false;
 AMqp:boolean=false;
 AMsb:boolean=false;

 TCv:boolean=false;
 TCn:boolean=false;
 TCqp:boolean=false;
 TCsb:boolean=false;

 SADv:boolean=false;
 SADn:boolean=false;
 SADqp:boolean=false;
 SADsb:boolean=false;

 SEv:boolean=false;
 SEn:boolean=false;
 SEqp:boolean=false;
 SEsb:boolean=false;

 GMv:boolean=false;
 GMn:boolean=false;
 GMqp:boolean=false;
 GMsb:boolean=false;

  ngOnInit() {

    if(this.service.materials=="Professionalethicsvideo"){
      this.PEv=true;
    }
    else if(this.service.materials=="Professionalethicsnotes"){
      this.PEn=true;
    }
    else if(this.service.materials=="Professionalethicsqp"){
      this.PEq=true;
    }
    else if(this.service.materials=="Professionalethicssb"){
      this.PEs=true;
    }



    else if(this.service.materials=="ComputerNetworksvideo"){
      this.CNv=true;
    }
    else if(this.service.materials=="ComputerNetworksnotes"){
      this.CNn=true;
    }
    else if(this.service.materials=="ComputerNetworksqp"){
      this.CNq=true;
    }
    else if(this.service.materials=="ComputerNetworkssb"){
      this.CNs=true;
    }



    else if(this.service.materials=="Entrepreneurshipv"){
      this.EDv=true;
    }
    else if(this.service.materials=="Entrepreneurshipn"){
      this.EDn=true;
    }
    else if(this.service.materials=="Entrepreneurshipqp"){
      this.EDqp=true;
    }
    else if(this.service.materials=="Entrepreneurshipsb"){
      this.EDsb=true;
    }



    else if(this.service.materials=="cloudcomputingv"){
      this.CCv=true;
    }
    else if(this.service.materials=="cloudcomputingn"){
      this.CCn=true;
    }
    else if(this.service.materials=="cloudcomputingqp"){
      this.CCqp=true;
    }
    else if(this.service.materials=="cloudcomputingsb"){
      this.CCsb=true;
    }



    else if(this.service.materials=="machinelearningv"){
      this.MCv=true;
    }
    else if(this.service.materials=="machinelearningn"){
      this.MCn=true;
    }
    else if(this.service.materials=="machinelearningqp"){
      this.MCqp=true;
    }
    else if(this.service.materials=="machinelearningsb"){
      this.MCsb=true;
    }


    else if(this.service.materials=="javav"){
      this.Jv=true;
    }
    else if(this.service.materials=="javan"){
      this.Jn=true;
    }
    else if(this.service.materials=="javaqp"){
      this.Jqp=true;
    }
    else if(this.service.materials=="javasb"){
      this.Jsb=true;
    }





    else if(this.service.materials=="operatingsystemv"){
      this.OSv=true;
    }
    else if(this.service.materials=="operatingsystemn"){
      this.OSn=true;
    }
    else if(this.service.materials=="operatingsystemqp"){
      this.OSqp=true;
    }
    else if(this.service.materials=="operatingsystemsb"){
      this.OSsb=true;
    }


    else if(this.service.materials=="cryptographyv"){
      this.CGv=true;
    }
    else if(this.service.materials=="cryptographyn"){
      this.CGn=true;
    }
    else if(this.service.materials=="cryptographyqp"){
      this.CGqp=true;
    }
    else if(this.service.materials=="cryptographysb"){
      this.CGsb=true;
    }



    else if(this.service.materials=="linearalegbrav"){
      this.LAv=true;
    }

    else if(this.service.materials=="linearalegbran"){
      this.LAn=true;
    }

    else if(this.service.materials=="linearalegbraqp"){
      this.LAqp=true;
    }

    else if(this.service.materials=="linearalegbrasb"){
      this.LAsb=true;
    }



    else if(this.service.materials=="Microprocessorv"){
      this.MPv=true;
    }

    else if(this.service.materials=="Microprocessorn"){
      this.MPn=true;
    }

    else if(this.service.materials=="Microprocessorqp"){
      this.MPqp=true;
    }

    else if(this.service.materials=="Microprocessorsb"){
      this.MPsb=true;
    }



    else if(this.service.materials=="vlsiv"){
      this.VLv=true;
    }

    else if(this.service.materials=="vlsin"){
      this.VLn=true;
    }

    else if(this.service.materials=="vlsiqp"){
      this.VLqp=true;
    }

    else if(this.service.materials=="vlsisb"){
      this.VLsb=true;
    }




    else if(this.service.materials=="analogdigv"){
      this.ADv=true;
    }

    else if(this.service.materials=="analogdign"){
      this.ADn=true;
    }

    else if(this.service.materials=="analogdigqp"){
      this.ADqp=true;
    }

    else if(this.service.materials=="analogdigsb"){
      this.ADsb=true;
    }



    else if(this.service.materials=="IntegretedCircuitv"){
      this.ICv=true;
    }

    else if(this.service.materials=="IntegretedCircuitn"){
      this.ICn=true;
    }

    else if(this.service.materials=="IntegretedCircuitqp"){
      this.ICqp=true;
    }

    else if(this.service.materials=="IntegretedCircuitsb"){
      this.ICsb=true;
    }



    else if(this.service.materials=="Antennawavev"){
      this.AWv=true;
    }

    else if(this.service.materials=="Antennawaven"){
      this.AWn=true;
    }

    else if(this.service.materials=="Antennawaveqp"){
      this.AWqp=true;
    }

    else if(this.service.materials=="Antennawavesb"){
      this.AWsb=true;
    }



    else if(this.service.materials=="pythonv"){
      this.PHv=true;
    }

    else if(this.service.materials=="pythonn"){
      this.PHn=true;
    }

    else if(this.service.materials=="pythonqp"){
      this.PHqp=true;
    }

    else if(this.service.materials=="pythonsb"){
      this.PHsb=true;
    }


    else if(this.service.materials=="embeddedsysv"){
      this.ESv=true;
    }

    else if(this.service.materials=="embeddedsysn"){
      this.ESn=true;
    }

    else if(this.service.materials=="embeddedsysqp"){
      this.ESqp=true;
    }

    else if(this.service.materials=="embeddedsyssb"){
      this.ESsb=true;
    }



    else if(this.service.materials=="eletricanalaysisv"){
      this.ECAv=true;
    }

    else if(this.service.materials=="eletricanalaysisn"){
      this.ECAn=true;
    }

    else if(this.service.materials=="eletricanalaysisqp"){
      this.ECAqp=true;
    }

    else if(this.service.materials=="eletricanalaysissb"){
      this.ECAsb=true;
    }


    else if(this.service.materials=="analogelectricv"){
      this.AEv=true;
    }

    else if(this.service.materials=="analogelectricn"){
      this.AEn=true;
    }

    else if(this.service.materials=="analogelectricqp"){
      this.AEqp=true;
    }

    else if(this.service.materials=="analogelectricsb"){
      this.AEsb=true;
    }



    else if(this.service.materials=="circuitsysv"){
      this.CSv=true;
    }

    else if(this.service.materials=="circuitsysn"){
      this.CSn=true;
    }

    else if(this.service.materials=="circuitsysqp"){
      this.CSqp=true;
    }

    else if(this.service.materials=="circuitsyssb"){
      this.CSsb=true;
    }


    else if(this.service.materials=="microcontrollerv"){
      this.MCRv=true;
    }

    else if(this.service.materials=="microcontrollern"){
      this.MCRn=true;
    }

    else if(this.service.materials=="microcontrollerqp"){
      this.MCRqp=true;
    }

    else if(this.service.materials=="microcontrollersb"){
      this.MCRsb=true;
    }



    else if(this.service.materials=="powerelectronicv"){
      this.PESv=true;
    }

    else if(this.service.materials=="powerelectronicn"){
      this.PESn=true;
    }

    else if(this.service.materials=="powerelectronicqp"){
      this.PESqp=true;
    }

    else if(this.service.materials=="powerelectronicsb"){
      this.PESsb=true;
    }



    else if(this.service.materials=="Transmissionv"){
      this.TMv=true;
    }

    else if(this.service.materials=="Transmissionn"){
      this.TMn=true;
    }

    else if(this.service.materials=="Transmissionqp"){
      this.TMqp=true;
    }

    else if(this.service.materials=="Transmissionsb"){
      this.TMsb=true;
    }



    else if(this.service.materials=="electricinsmeasv"){
      this.EMIv=true;
    }

    else if(this.service.materials=="electricinsmeasn"){
      this.EMIn=true;
    }

    else if(this.service.materials=="electricinsmeasqp"){
      this.EMIqp=true;
    }

    else if(this.service.materials=="electricinsmeassb"){
      this.EMIsb=true;
    }



    else if(this.service.materials=="electichybridvehv"){
      this.EHVv=true;
    }

    else if(this.service.materials=="electichybridvehn"){
      this.EHVn=true;
    }

    else if(this.service.materials=="electichybridvehqp"){
      this.EHVqp=true;
    }

    else if(this.service.materials=="electichybridvehsb"){
      this.EHVsb=true;
    }



    else if(this.service.materials=="Cprogramv"){
      this.CPv=true;
    }

    else if(this.service.materials=="Cprogramn"){
      this.CPn=true;
    }

    else if(this.service.materials=="Cprogramqp"){
      this.CPqp=true;
    }

    else if(this.service.materials=="Cprogramsb"){
      this.CPsb=true;
    }



    else if(this.service.materials=="C++programv"){
      this.CPPv=true;
    }

    else if(this.service.materials=="C++programn"){
      this.CPPn=true;
    }

    else if(this.service.materials=="C++programqp"){
      this.CPPqp=true;
    }

    else if(this.service.materials=="C++programsb"){
      this.CPPsb=true;
    }



    else if(this.service.materials=="Datastructurev"){
      this.DSv=true;
    }

    else if(this.service.materials=="Datastructuren"){
      this.DSn=true;
    }

    else if(this.service.materials=="Datastructureqp"){
      this.DSqp=true;
    }

    else if(this.service.materials=="Datastructuresb"){
      this.DSsb=true;
    }



    else if(this.service.materials=="Agilemethodv"){
      this.AMv=true;
    }

    else if(this.service.materials=="Agilemethodn"){
      this.AMn=true;
    }

    else if(this.service.materials=="Agilemethodqp"){
      this.AMqp=true;
    }

    else if(this.service.materials=="Agilemethodsb"){
      this.AMsb=true;
    }



    else if(this.service.materials=="telecommunicationv"){
      this.TCv=true;
    }

    else if(this.service.materials=="telecommunicationn"){
      this.TCn=true;
    }

    else if(this.service.materials=="telecommunicationqp"){
      this.TCqp=true;
    }

    else if(this.service.materials=="telecommunicationsb"){
      this.TCsb=true;
    }



    else if(this.service.materials=="analysissystemv"){
      this.SADv=true;
    }

    else if(this.service.materials=="analysissystemn"){
      this.SADn=true;
    }

    else if(this.service.materials=="analysissystemqp"){
      this.SADqp=true;
    }

    else if(this.service.materials=="analysissystemsb"){
      this.SADsb=true;
    }




    else if(this.service.materials=="softwareengv"){
      this.SEv=true;
    }

    else if(this.service.materials=="softwareengn"){
      this.SEn=true;
    }

    else if(this.service.materials=="softwareengqp"){
      this.SEqp=true;
    }

    else if(this.service.materials=="softwareengsb"){
      this.SEsb=true;
    }




    else if(this.service.materials=="Graphicsmediav"){
      this.GMv=true;
    }

    else if(this.service.materials=="Graphicsmedian"){
      this.GMn=true;
    }

    else if(this.service.materials=="Graphicsmediaqp"){
      this.GMqp=true;
    }

    else if(this.service.materials=="Graphicsmediasb"){
      this.GMsb=true;
    }
  }
}


