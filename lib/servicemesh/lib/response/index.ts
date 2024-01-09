/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as CancelWorkRequestResponse from "./cancel-work-request-response";
export import CancelWorkRequestResponse = CancelWorkRequestResponse.CancelWorkRequestResponse;
import * as ChangeAccessPolicyCompartmentResponse from "./change-access-policy-compartment-response";
export import ChangeAccessPolicyCompartmentResponse = ChangeAccessPolicyCompartmentResponse.ChangeAccessPolicyCompartmentResponse;
import * as ChangeIngressGatewayCompartmentResponse from "./change-ingress-gateway-compartment-response";
export import ChangeIngressGatewayCompartmentResponse = ChangeIngressGatewayCompartmentResponse.ChangeIngressGatewayCompartmentResponse;
import * as ChangeIngressGatewayRouteTableCompartmentResponse from "./change-ingress-gateway-route-table-compartment-response";
export import ChangeIngressGatewayRouteTableCompartmentResponse = ChangeIngressGatewayRouteTableCompartmentResponse.ChangeIngressGatewayRouteTableCompartmentResponse;
import * as ChangeMeshCompartmentResponse from "./change-mesh-compartment-response";
export import ChangeMeshCompartmentResponse = ChangeMeshCompartmentResponse.ChangeMeshCompartmentResponse;
import * as ChangeVirtualDeploymentCompartmentResponse from "./change-virtual-deployment-compartment-response";
export import ChangeVirtualDeploymentCompartmentResponse = ChangeVirtualDeploymentCompartmentResponse.ChangeVirtualDeploymentCompartmentResponse;
import * as ChangeVirtualServiceCompartmentResponse from "./change-virtual-service-compartment-response";
export import ChangeVirtualServiceCompartmentResponse = ChangeVirtualServiceCompartmentResponse.ChangeVirtualServiceCompartmentResponse;
import * as ChangeVirtualServiceRouteTableCompartmentResponse from "./change-virtual-service-route-table-compartment-response";
export import ChangeVirtualServiceRouteTableCompartmentResponse = ChangeVirtualServiceRouteTableCompartmentResponse.ChangeVirtualServiceRouteTableCompartmentResponse;
import * as CreateAccessPolicyResponse from "./create-access-policy-response";
export import CreateAccessPolicyResponse = CreateAccessPolicyResponse.CreateAccessPolicyResponse;
import * as CreateIngressGatewayResponse from "./create-ingress-gateway-response";
export import CreateIngressGatewayResponse = CreateIngressGatewayResponse.CreateIngressGatewayResponse;
import * as CreateIngressGatewayRouteTableResponse from "./create-ingress-gateway-route-table-response";
export import CreateIngressGatewayRouteTableResponse = CreateIngressGatewayRouteTableResponse.CreateIngressGatewayRouteTableResponse;
import * as CreateMeshResponse from "./create-mesh-response";
export import CreateMeshResponse = CreateMeshResponse.CreateMeshResponse;
import * as CreateVirtualDeploymentResponse from "./create-virtual-deployment-response";
export import CreateVirtualDeploymentResponse = CreateVirtualDeploymentResponse.CreateVirtualDeploymentResponse;
import * as CreateVirtualServiceResponse from "./create-virtual-service-response";
export import CreateVirtualServiceResponse = CreateVirtualServiceResponse.CreateVirtualServiceResponse;
import * as CreateVirtualServiceRouteTableResponse from "./create-virtual-service-route-table-response";
export import CreateVirtualServiceRouteTableResponse = CreateVirtualServiceRouteTableResponse.CreateVirtualServiceRouteTableResponse;
import * as DeleteAccessPolicyResponse from "./delete-access-policy-response";
export import DeleteAccessPolicyResponse = DeleteAccessPolicyResponse.DeleteAccessPolicyResponse;
import * as DeleteIngressGatewayResponse from "./delete-ingress-gateway-response";
export import DeleteIngressGatewayResponse = DeleteIngressGatewayResponse.DeleteIngressGatewayResponse;
import * as DeleteIngressGatewayRouteTableResponse from "./delete-ingress-gateway-route-table-response";
export import DeleteIngressGatewayRouteTableResponse = DeleteIngressGatewayRouteTableResponse.DeleteIngressGatewayRouteTableResponse;
import * as DeleteMeshResponse from "./delete-mesh-response";
export import DeleteMeshResponse = DeleteMeshResponse.DeleteMeshResponse;
import * as DeleteVirtualDeploymentResponse from "./delete-virtual-deployment-response";
export import DeleteVirtualDeploymentResponse = DeleteVirtualDeploymentResponse.DeleteVirtualDeploymentResponse;
import * as DeleteVirtualServiceResponse from "./delete-virtual-service-response";
export import DeleteVirtualServiceResponse = DeleteVirtualServiceResponse.DeleteVirtualServiceResponse;
import * as DeleteVirtualServiceRouteTableResponse from "./delete-virtual-service-route-table-response";
export import DeleteVirtualServiceRouteTableResponse = DeleteVirtualServiceRouteTableResponse.DeleteVirtualServiceRouteTableResponse;
import * as GetAccessPolicyResponse from "./get-access-policy-response";
export import GetAccessPolicyResponse = GetAccessPolicyResponse.GetAccessPolicyResponse;
import * as GetIngressGatewayResponse from "./get-ingress-gateway-response";
export import GetIngressGatewayResponse = GetIngressGatewayResponse.GetIngressGatewayResponse;
import * as GetIngressGatewayRouteTableResponse from "./get-ingress-gateway-route-table-response";
export import GetIngressGatewayRouteTableResponse = GetIngressGatewayRouteTableResponse.GetIngressGatewayRouteTableResponse;
import * as GetMeshResponse from "./get-mesh-response";
export import GetMeshResponse = GetMeshResponse.GetMeshResponse;
import * as GetProxyDetailsResponse from "./get-proxy-details-response";
export import GetProxyDetailsResponse = GetProxyDetailsResponse.GetProxyDetailsResponse;
import * as GetVirtualDeploymentResponse from "./get-virtual-deployment-response";
export import GetVirtualDeploymentResponse = GetVirtualDeploymentResponse.GetVirtualDeploymentResponse;
import * as GetVirtualServiceResponse from "./get-virtual-service-response";
export import GetVirtualServiceResponse = GetVirtualServiceResponse.GetVirtualServiceResponse;
import * as GetVirtualServiceRouteTableResponse from "./get-virtual-service-route-table-response";
export import GetVirtualServiceRouteTableResponse = GetVirtualServiceRouteTableResponse.GetVirtualServiceRouteTableResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListAccessPoliciesResponse from "./list-access-policies-response";
export import ListAccessPoliciesResponse = ListAccessPoliciesResponse.ListAccessPoliciesResponse;
import * as ListIngressGatewayRouteTablesResponse from "./list-ingress-gateway-route-tables-response";
export import ListIngressGatewayRouteTablesResponse = ListIngressGatewayRouteTablesResponse.ListIngressGatewayRouteTablesResponse;
import * as ListIngressGatewaysResponse from "./list-ingress-gateways-response";
export import ListIngressGatewaysResponse = ListIngressGatewaysResponse.ListIngressGatewaysResponse;
import * as ListMeshesResponse from "./list-meshes-response";
export import ListMeshesResponse = ListMeshesResponse.ListMeshesResponse;
import * as ListVirtualDeploymentsResponse from "./list-virtual-deployments-response";
export import ListVirtualDeploymentsResponse = ListVirtualDeploymentsResponse.ListVirtualDeploymentsResponse;
import * as ListVirtualServiceRouteTablesResponse from "./list-virtual-service-route-tables-response";
export import ListVirtualServiceRouteTablesResponse = ListVirtualServiceRouteTablesResponse.ListVirtualServiceRouteTablesResponse;
import * as ListVirtualServicesResponse from "./list-virtual-services-response";
export import ListVirtualServicesResponse = ListVirtualServicesResponse.ListVirtualServicesResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
import * as UpdateAccessPolicyResponse from "./update-access-policy-response";
export import UpdateAccessPolicyResponse = UpdateAccessPolicyResponse.UpdateAccessPolicyResponse;
import * as UpdateIngressGatewayResponse from "./update-ingress-gateway-response";
export import UpdateIngressGatewayResponse = UpdateIngressGatewayResponse.UpdateIngressGatewayResponse;
import * as UpdateIngressGatewayRouteTableResponse from "./update-ingress-gateway-route-table-response";
export import UpdateIngressGatewayRouteTableResponse = UpdateIngressGatewayRouteTableResponse.UpdateIngressGatewayRouteTableResponse;
import * as UpdateMeshResponse from "./update-mesh-response";
export import UpdateMeshResponse = UpdateMeshResponse.UpdateMeshResponse;
import * as UpdateVirtualDeploymentResponse from "./update-virtual-deployment-response";
export import UpdateVirtualDeploymentResponse = UpdateVirtualDeploymentResponse.UpdateVirtualDeploymentResponse;
import * as UpdateVirtualServiceResponse from "./update-virtual-service-response";
export import UpdateVirtualServiceResponse = UpdateVirtualServiceResponse.UpdateVirtualServiceResponse;
import * as UpdateVirtualServiceRouteTableResponse from "./update-virtual-service-route-table-response";
export import UpdateVirtualServiceRouteTableResponse = UpdateVirtualServiceRouteTableResponse.UpdateVirtualServiceRouteTableResponse;
