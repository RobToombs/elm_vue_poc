<template>
  <div class="appointments">
    <ui-grid class="no-margin header">
      <ui-grid-cell columns="2">Last Name</ui-grid-cell>
      <ui-grid-cell columns="2">First Name</ui-grid-cell>
      <ui-grid-cell columns="2">DOB</ui-grid-cell>
      <ui-grid-cell columns="2">MRN</ui-grid-cell>
      <ui-grid-cell columns="2">Date</ui-grid-cell>
      <ui-grid-cell columns="2">Last Saved</ui-grid-cell>
    </ui-grid>

    <ui-card v-for="appt in appointments" v-bind:key="appt.id" class="card">
      <ui-card-content>
        <ui-grid class="no-margin">
          <ui-grid-cell columns="2">
            {{ appt.lastName }}
          </ui-grid-cell>
          <ui-grid-cell columns="2">
            {{ appt.firstName }}
          </ui-grid-cell>
          <ui-grid-cell columns="2">
            {{ formatDate(appt.dob) }}
          </ui-grid-cell>
          <ui-grid-cell columns="2">
            {{ appt.mrn }}
          </ui-grid-cell>
          <ui-grid-cell columns="2">
            {{ formatDate(appt.date) }}
          </ui-grid-cell>
          <ui-grid-cell columns="2">
            {{ formatDate(appt.lastSaved) }}
          </ui-grid-cell>
        </ui-grid>
      </ui-card-content>
    </ui-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
import { Appointments } from "@/types/Appointment";

export default defineComponent({
  name: "appointments",
  data(): Appointments {
    return {
      appointments: [],
    };
  },
  mounted(): void {
    this.getAppointments();
  },
  methods: {
    formatDate(dateString: string): string {
      if (dateString) {
        const date = dayjs(dateString);
        return date.format("M/D/YYYY");
      } else {
        return "";
      }
    },
    async getAppointments(): Promise<void> {
      const res = await fetch("/api/appointments");
      this.appointments = await res.json();
    },
  },
});
</script>

<style>
.header {
  padding-top: 4px;
  padding-bottom: 4px;
}

.appointments {
  margin-left: 4%;
  margin-right: 4%;
  width: 92%;
}

.card {
  margin-top: 5px;
}

.no-margin {
  margin: 0;
}
</style>
