import { Navigate, useParams } from "react-router-dom";
import ServiceDetailView from "../components/services/ServiceDetail";
import CtaBanner from "../components/home/CtaBanner";
import { getRelatedServices, getServiceById } from "../data/services";

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = getServiceById(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <ServiceDetailView service={service} related={getRelatedServices(service.id)} />
      <CtaBanner />
    </>
  );
}

export default ServiceDetail;
