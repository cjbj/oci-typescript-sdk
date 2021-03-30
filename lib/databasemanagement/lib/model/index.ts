/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivityTimeSeriesMetrics from "./activity-time-series-metrics";
export import ActivityTimeSeriesMetrics = ActivityTimeSeriesMetrics.ActivityTimeSeriesMetrics;
import * as AddManagedDatabaseToManagedDatabaseGroupDetails from "./add-managed-database-to-managed-database-group-details";
export import AddManagedDatabaseToManagedDatabaseGroupDetails = AddManagedDatabaseToManagedDatabaseGroupDetails.AddManagedDatabaseToManagedDatabaseGroupDetails;
import * as AllowedParameterValue from "./allowed-parameter-value";
export import AllowedParameterValue = AllowedParameterValue.AllowedParameterValue;
import * as ChangeDatabaseParameterDetails from "./change-database-parameter-details";
export import ChangeDatabaseParameterDetails = ChangeDatabaseParameterDetails.ChangeDatabaseParameterDetails;
import * as ChangeDatabaseParametersDetails from "./change-database-parameters-details";
export import ChangeDatabaseParametersDetails = ChangeDatabaseParametersDetails.ChangeDatabaseParametersDetails;
import * as ChangeJobCompartmentDetails from "./change-job-compartment-details";
export import ChangeJobCompartmentDetails = ChangeJobCompartmentDetails.ChangeJobCompartmentDetails;
import * as ChangeManagedDatabaseGroupCompartmentDetails from "./change-managed-database-group-compartment-details";
export import ChangeManagedDatabaseGroupCompartmentDetails = ChangeManagedDatabaseGroupCompartmentDetails.ChangeManagedDatabaseGroupCompartmentDetails;
import * as ChildDatabase from "./child-database";
export import ChildDatabase = ChildDatabase.ChildDatabase;
import * as CompareType from "./compare-type";
export import CompareType = CompareType.CompareType;
import * as CreateJobDetails from "./create-job-details";
export import CreateJobDetails = CreateJobDetails.CreateJobDetails;
import * as CreateManagedDatabaseGroupDetails from "./create-managed-database-group-details";
export import CreateManagedDatabaseGroupDetails = CreateManagedDatabaseGroupDetails.CreateManagedDatabaseGroupDetails;
import * as DatabaseCredentials from "./database-credentials";
export import DatabaseCredentials = DatabaseCredentials.DatabaseCredentials;
import * as DatabaseFleetHealthMetrics from "./database-fleet-health-metrics";
export import DatabaseFleetHealthMetrics = DatabaseFleetHealthMetrics.DatabaseFleetHealthMetrics;
import * as DatabaseHomeMetricDefinition from "./database-home-metric-definition";
export import DatabaseHomeMetricDefinition = DatabaseHomeMetricDefinition.DatabaseHomeMetricDefinition;
import * as DatabaseHomeMetrics from "./database-home-metrics";
export import DatabaseHomeMetrics = DatabaseHomeMetrics.DatabaseHomeMetrics;
import * as DatabaseIOAggregateMetrics from "./database-io-aggregate-metrics";
export import DatabaseIOAggregateMetrics = DatabaseIOAggregateMetrics.DatabaseIOAggregateMetrics;
import * as DatabaseParameterSummary from "./database-parameter-summary";
export import DatabaseParameterSummary = DatabaseParameterSummary.DatabaseParameterSummary;
import * as DatabaseParameterUpdateStatus from "./database-parameter-update-status";
export import DatabaseParameterUpdateStatus = DatabaseParameterUpdateStatus.DatabaseParameterUpdateStatus;
import * as DatabaseParametersCollection from "./database-parameters-collection";
export import DatabaseParametersCollection = DatabaseParametersCollection.DatabaseParametersCollection;
import * as DatabaseStatus from "./database-status";
export import DatabaseStatus = DatabaseStatus.DatabaseStatus;
import * as DatabaseStorageAggregateMetrics from "./database-storage-aggregate-metrics";
export import DatabaseStorageAggregateMetrics = DatabaseStorageAggregateMetrics.DatabaseStorageAggregateMetrics;
import * as DatabaseSubType from "./database-sub-type";
export import DatabaseSubType = DatabaseSubType.DatabaseSubType;
import * as DatabaseTimeAggregateMetrics from "./database-time-aggregate-metrics";
export import DatabaseTimeAggregateMetrics = DatabaseTimeAggregateMetrics.DatabaseTimeAggregateMetrics;
import * as DatabaseType from "./database-type";
export import DatabaseType = DatabaseType.DatabaseType;
import * as DatabaseUsageMetrics from "./database-usage-metrics";
export import DatabaseUsageMetrics = DatabaseUsageMetrics.DatabaseUsageMetrics;
import * as Datafile from "./datafile";
export import Datafile = Datafile.Datafile;
import * as FleetMetricDefinition from "./fleet-metric-definition";
export import FleetMetricDefinition = FleetMetricDefinition.FleetMetricDefinition;
import * as FleetMetricSummaryDefinition from "./fleet-metric-summary-definition";
export import FleetMetricSummaryDefinition = FleetMetricSummaryDefinition.FleetMetricSummaryDefinition;
import * as FleetStatusByCategory from "./fleet-status-by-category";
export import FleetStatusByCategory = FleetStatusByCategory.FleetStatusByCategory;
import * as FleetSummary from "./fleet-summary";
export import FleetSummary = FleetSummary.FleetSummary;
import * as Job from "./job";
export import Job = Job.Job;
import * as JobCollection from "./job-collection";
export import JobCollection = JobCollection.JobCollection;
import * as JobDatabase from "./job-database";
export import JobDatabase = JobDatabase.JobDatabase;
import * as JobExecution from "./job-execution";
export import JobExecution = JobExecution.JobExecution;
import * as JobExecutionCollection from "./job-execution-collection";
export import JobExecutionCollection = JobExecutionCollection.JobExecutionCollection;
import * as JobExecutionResultDetails from "./job-execution-result-details";
export import JobExecutionResultDetails = JobExecutionResultDetails.JobExecutionResultDetails;
import * as JobExecutionResultLocation from "./job-execution-result-location";
export import JobExecutionResultLocation = JobExecutionResultLocation.JobExecutionResultLocation;
import * as JobExecutionSummary from "./job-execution-summary";
export import JobExecutionSummary = JobExecutionSummary.JobExecutionSummary;
import * as JobRun from "./job-run";
export import JobRun = JobRun.JobRun;
import * as JobRunCollection from "./job-run-collection";
export import JobRunCollection = JobRunCollection.JobRunCollection;
import * as JobRunSummary from "./job-run-summary";
export import JobRunSummary = JobRunSummary.JobRunSummary;
import * as JobSummary from "./job-summary";
export import JobSummary = JobSummary.JobSummary;
import * as JobTypes from "./job-types";
export import JobTypes = JobTypes.JobTypes;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as ManagedDatabase from "./managed-database";
export import ManagedDatabase = ManagedDatabase.ManagedDatabase;
import * as ManagedDatabaseCollection from "./managed-database-collection";
export import ManagedDatabaseCollection = ManagedDatabaseCollection.ManagedDatabaseCollection;
import * as ManagedDatabaseGroup from "./managed-database-group";
export import ManagedDatabaseGroup = ManagedDatabaseGroup.ManagedDatabaseGroup;
import * as ManagedDatabaseGroupCollection from "./managed-database-group-collection";
export import ManagedDatabaseGroupCollection = ManagedDatabaseGroupCollection.ManagedDatabaseGroupCollection;
import * as ManagedDatabaseGroupSummary from "./managed-database-group-summary";
export import ManagedDatabaseGroupSummary = ManagedDatabaseGroupSummary.ManagedDatabaseGroupSummary;
import * as ManagedDatabaseSummary from "./managed-database-summary";
export import ManagedDatabaseSummary = ManagedDatabaseSummary.ManagedDatabaseSummary;
import * as MemoryAggregateMetrics from "./memory-aggregate-metrics";
export import MemoryAggregateMetrics = MemoryAggregateMetrics.MemoryAggregateMetrics;
import * as MetricDataPoint from "./metric-data-point";
export import MetricDataPoint = MetricDataPoint.MetricDataPoint;
import * as MetricDimensionDefinition from "./metric-dimension-definition";
export import MetricDimensionDefinition = MetricDimensionDefinition.MetricDimensionDefinition;
import * as ParameterScope from "./parameter-scope";
export import ParameterScope = ParameterScope.ParameterScope;
import * as ParentGroup from "./parent-group";
export import ParentGroup = ParentGroup.ParentGroup;
import * as RemoveManagedDatabaseFromManagedDatabaseGroupDetails from "./remove-managed-database-from-managed-database-group-details";
export import RemoveManagedDatabaseFromManagedDatabaseGroupDetails = RemoveManagedDatabaseFromManagedDatabaseGroupDetails.RemoveManagedDatabaseFromManagedDatabaseGroupDetails;
import * as ResetDatabaseParametersDetails from "./reset-database-parameters-details";
export import ResetDatabaseParametersDetails = ResetDatabaseParametersDetails.ResetDatabaseParametersDetails;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as Tablespace from "./tablespace";
export import Tablespace = Tablespace.Tablespace;
import * as TablespaceCollection from "./tablespace-collection";
export import TablespaceCollection = TablespaceCollection.TablespaceCollection;
import * as TablespaceSummary from "./tablespace-summary";
export import TablespaceSummary = TablespaceSummary.TablespaceSummary;
import * as UpdateDatabaseParametersResult from "./update-database-parameters-result";
export import UpdateDatabaseParametersResult = UpdateDatabaseParametersResult.UpdateDatabaseParametersResult;
import * as UpdateManagedDatabaseGroupDetails from "./update-managed-database-group-details";
export import UpdateManagedDatabaseGroupDetails = UpdateManagedDatabaseGroupDetails.UpdateManagedDatabaseGroupDetails;

import * as CreateSqlJobDetails from "./create-sql-job-details";
export import CreateSqlJobDetails = CreateSqlJobDetails.CreateSqlJobDetails;
import * as ObjectStorageJobExecutionResultDetails from "./object-storage-job-execution-result-details";
export import ObjectStorageJobExecutionResultDetails = ObjectStorageJobExecutionResultDetails.ObjectStorageJobExecutionResultDetails;
import * as ObjectStorageJobExecutionResultLocation from "./object-storage-job-execution-result-location";
export import ObjectStorageJobExecutionResultLocation = ObjectStorageJobExecutionResultLocation.ObjectStorageJobExecutionResultLocation;
import * as SqlJob from "./sql-job";
export import SqlJob = SqlJob.SqlJob;
