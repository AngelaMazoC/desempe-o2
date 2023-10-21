import React from 'react'
import { AiFillMedicineBox } from "react-icons/ai";
import { BsFileMedicalFill } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa6";



const Services = () => {
  return (
    <div class="main-container">  
        <div class="content-container">
            <h5 class="section-title">Nuestros Servicios</h5>
            <h1 class="main-title">Lo Que Ofrecemos</h1>
            <div class="service-row">
                <div class="service-item">
                    <div class="service-box">
                        <div class="icon-box">
                            <i class="service-icon fas fa-cloud-sun">
                              <AiFillMedicineBox/>
                            </i>
                        </div>
                        <h4 class="service-title">Medicina General</h4>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-box">
                        <div class="icon-box">
                            <i class="service-icon fas fa-soap">
                              <BsFileMedicalFill/>
                            </i>
                        </div>
                        <h4 class="service-title">Radiografías</h4>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-box">
                        <div class="icon-box">
                            <i class="service-icon fas fa-burn">
                              <TbVaccine/>
                            </i>
                        </div>
                        <h4 class="service-title">Vacunación</h4>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-box">
                        <div class="icon-box">
                            <i class="service-icon fas fa-tshirt">
                              <FaHandHoldingMedical/>
                            </i>
                        </div>
                        <h4 class="service-title">Ayudas Diagnósticas</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Services