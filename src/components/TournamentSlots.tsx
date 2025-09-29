"use client";

import { TournamentSlot } from "@/data/tournaments";
import { Users, CheckCircle, Clock, User } from "lucide-react";
import Image from "next/image";

interface TournamentSlotsProps {
  slots: TournamentSlot[];
  maxTeams: number;
}

export default function TournamentSlots({
  slots,
  maxTeams,
}: TournamentSlotsProps) {
  // Split slots into two groups (A and B)
  const groupA = slots.filter((slot) => slot.slotName.startsWith("A"));
  const groupB = slots.filter((slot) => slot.slotName.startsWith("B"));

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "reserved":
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return <User className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "border-green-500/30 bg-green-500/5";
      case "reserved":
        return "border-yellow-500/30 bg-yellow-500/5";
      default:
        return "border-slate-700/50 bg-slate-800/30";
    }
  };

  const SlotTable = ({
    title,
    slots,
    groupLetter,
  }: {
    title: string;
    slots: TournamentSlot[];
    groupLetter: string;
  }) => (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-700/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-2 md:p-3 bg-cyan-500/20 rounded-lg md:rounded-xl">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm">
                {slots.filter((slot) => slot.status === "confirmed").length}/
                {slots.length} slots filled
              </p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {groupLetter}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 md:mb-6">
          <div className="bg-slate-700 rounded-full h-1.5 md:h-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1.5 md:h-2 rounded-full transition-all duration-500"
              style={{
                width: `${
                  (slots.filter((slot) => slot.status === "confirmed").length /
                    slots.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Table - Desktop/Tablet View */}
        <div className="hidden md:block space-y-2">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 text-slate-400 text-sm font-medium">
            <div className="col-span-2">Slot</div>
            <div className="col-span-2">Logo</div>
            <div className="col-span-5">Team Name</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1">Date</div>
          </div>

          {/* Table Body */}
          <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            {slots.map((slot) => (
              <div
                key={slot.slotNumber}
                className={`grid grid-cols-12 gap-3 p-3 rounded-xl border transition-all duration-300 hover:border-cyan-500/30 ${getStatusColor(
                  slot.status
                )}`}
              >
                {/* Slot Name */}
                <div className="col-span-2 flex items-center">
                  <div className="bg-slate-700 px-3 py-1 rounded-lg text-white font-bold text-sm">
                    {slot.slotName}
                  </div>
                </div>

                {/* Team Logo */}
                <div className="col-span-2 flex items-center">
                  <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                    {slot.status === "confirmed" ? (
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        {slot.teamName.charAt(0)}
                      </div>
                    ) : (
                      <User className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                </div>

                {/* Team Name */}
                <div className="col-span-5 flex items-center">
                  <div
                    className={`font-medium ${
                      slot.status === "confirmed"
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {slot.teamName}
                  </div>
                </div>

                {/* Status */}
                <div className="col-span-2 flex items-center gap-2">
                  {getStatusIcon(slot.status)}
                  <span
                    className={`text-sm capitalize ${
                      slot.status === "confirmed"
                        ? "text-green-400"
                        : slot.status === "reserved"
                        ? "text-yellow-400"
                        : "text-slate-400"
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>

                {/* Registration Date */}
                <div className="col-span-1 flex items-center">
                  <span className="text-slate-400 text-xs">
                    {slot.registrationDate
                      ? new Date(slot.registrationDate).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" }
                        )
                      : "-"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 space-y-3">
            {slots.map((slot) => (
              <div
                key={slot.slotNumber}
                className={`p-4 rounded-xl border transition-all duration-300 ${getStatusColor(
                  slot.status
                )}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-700 px-2 py-1 rounded-lg text-white font-bold text-sm">
                      {slot.slotName}
                    </div>
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden">
                      {slot.status === "confirmed" ? (
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
                          {slot.teamName.charAt(0)}
                        </div>
                      ) : (
                        <User className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(slot.status)}
                    <span
                      className={`text-xs capitalize font-medium ${
                        slot.status === "confirmed"
                          ? "text-green-400"
                          : slot.status === "reserved"
                          ? "text-yellow-400"
                          : "text-slate-400"
                      }`}
                    >
                      {slot.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div
                    className={`font-medium ${
                      slot.status === "confirmed"
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {slot.teamName}
                  </div>
                  {slot.registrationDate && (
                    <div className="text-slate-400 text-xs">
                      Registered:{" "}
                      {new Date(slot.registrationDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3 md:space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tournament Slots
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
          Track team registrations and slot allocations for both groups. Teams
          are divided into two groups for the group stage.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium">
              Confirmed Teams
            </span>
          </div>
          <div className="text-3xl font-bold text-green-400">
            {slots.filter((slot) => slot.status === "confirmed").length}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-500/20 rounded-xl">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium">
              Available Slots
            </span>
          </div>
          <div className="text-3xl font-bold text-blue-400">
            {slots.filter((slot) => slot.status === "available").length}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-500/20 rounded-xl">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium">
              Total Capacity
            </span>
          </div>
          <div className="text-3xl font-bold text-purple-400">{maxTeams}</div>
        </div>
      </div>

      {/* Side by Side Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <SlotTable title="Group Alpha" slots={groupA} groupLetter="A" />
        <SlotTable title="Group Beta" slots={groupB} groupLetter="B" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8 px-4">
        <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm md:text-base rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-1">
          Register Your Team
        </button>
        <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-bold text-sm md:text-base rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-slate-500/25 hover:shadow-slate-500/40 transform hover:-translate-y-1">
          Download Slot List
        </button>
      </div>
    </div>
  );
}
