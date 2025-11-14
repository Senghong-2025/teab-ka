<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <Settings class="w-10 h-10 text-indigo-600" />
          <h1 class="text-4xl font-bold text-gray-800">
            {{ $t('settings.title') }}
          </h1>
        </div>
        <p class="text-gray-600">
          {{ $t('settings.subtitle') }}
        </p>
      </div>

      <!-- Settings Sections -->
      <div class="space-y-6">

        <!-- Account Settings -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6 flex items-center gap-2">
            <User class="w-6 h-6 text-indigo-600" />
            {{ $t('settings.sections.account') }}
          </h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('settings.account.name') }}
              </label>
              <input
                v-model="accountSettings.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                :placeholder="$t('settings.account.namePlaceholder')"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('settings.account.email') }}
              </label>
              <input
                v-model="accountSettings.email"
                type="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                :placeholder="$t('settings.account.emailPlaceholder')"
              />
            </div>
          </div>
        </div>

        <!-- Appearance Settings -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6 flex items-center gap-2">
            <Palette class="w-6 h-6 text-indigo-600" />
            {{ $t('settings.sections.appearance') }}
          </h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('settings.appearance.theme') }}
              </label>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="theme in themes"
                  :key="theme.value"
                  :class="[
                    'p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2',
                    appearanceSettings.theme === theme.value
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  ]"
                  @click="appearanceSettings.theme = theme.value"
                >
                  <component :is="theme.icon" class="w-6 h-6" />
                  <span class="text-sm font-medium">{{ theme.label }}</span>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('settings.appearance.language') }}
              </label>
              <select
                v-model="appearanceSettings.language"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                @change="switchLanguage(appearanceSettings.language)"
              >
                <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
                  {{ lang.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6 flex items-center gap-2">
            <Bell class="w-6 h-6 text-indigo-600" />
            {{ $t('settings.sections.notifications') }}
          </h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex-1">
                <h3 class="font-medium text-gray-800">{{ $t('settings.notifications.email') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('settings.notifications.emailDesc') }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="notificationSettings.email"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex-1">
                <h3 class="font-medium text-gray-800">{{ $t('settings.notifications.push') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('settings.notifications.pushDesc') }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="notificationSettings.push"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex-1">
                <h3 class="font-medium text-gray-800">{{ $t('settings.notifications.sms') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('settings.notifications.smsDesc') }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="notificationSettings.sms"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Privacy Settings -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6 flex items-center gap-2">
            <Shield class="w-6 h-6 text-indigo-600" />
            {{ $t('settings.sections.privacy') }}
          </h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex-1">
                <h3 class="font-medium text-gray-800">{{ $t('settings.privacy.profileVisibility') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('settings.privacy.profileVisibilityDesc') }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="privacySettings.profilePublic"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex-1">
                <h3 class="font-medium text-gray-800">{{ $t('settings.privacy.showEmail') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('settings.privacy.showEmailDesc') }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="privacySettings.showEmail"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 pt-4">
          <button
            type="button"
            class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="saveSettings"
          >
            <Save class="w-5 h-5" />
            {{ $t('settings.actions.save') }}
          </button>
          <button
            type="button"
            class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
            @click="resetSettings"
          >
            <RotateCcw class="w-5 h-5" />
            {{ $t('settings.actions.reset') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Settings, User, Palette, Bell, Shield, Save, RotateCcw, Sun, Moon, Monitor } from 'lucide-vue-next';

const { locale, setLocale } = useI18n();

// Account Settings
const accountSettings = ref({
  name: '',
  email: ''
});

// Appearance Settings
const appearanceSettings = ref({
  theme: 'light',
  language: locale.value
});

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor }
];

const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'kh', name: 'ភាសាខ្មែរ' }
];

// Notification Settings
const notificationSettings = ref({
  email: true,
  push: false,
  sms: false
});

// Privacy Settings
const privacySettings = ref({
  profilePublic: true,
  showEmail: false
});

// Functions
function switchLanguage(newLocale: 'en' | 'kh') {
  setLocale(newLocale);
}

function saveSettings() {
  // Save settings logic here
  console.log('Saving settings...', {
    account: accountSettings.value,
    appearance: appearanceSettings.value,
    notifications: notificationSettings.value,
    privacy: privacySettings.value
  });

  // You can add toast notification here
  alert('Settings saved successfully!');
}

function resetSettings() {
  accountSettings.value = {
    name: '',
    email: ''
  };
  appearanceSettings.value = {
    theme: 'light',
    language: 'en'
  };
  notificationSettings.value = {
    email: true,
    push: false,
    sms: false
  };
  privacySettings.value = {
    profilePublic: true,
    showEmail: false
  };
}

// Load settings on mount
onMounted(() => {
  // Load settings from localStorage or API
  const savedSettings = localStorage.getItem('userSettings');
  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (parsed.account) accountSettings.value = parsed.account;
    if (parsed.appearance) appearanceSettings.value = parsed.appearance;
    if (parsed.notifications) notificationSettings.value = parsed.notifications;
    if (parsed.privacy) privacySettings.value = parsed.privacy;
  }
});

// Watch for changes and save to localStorage
watch([accountSettings, appearanceSettings, notificationSettings, privacySettings], () => {
  localStorage.setItem('userSettings', JSON.stringify({
    account: accountSettings.value,
    appearance: appearanceSettings.value,
    notifications: notificationSettings.value,
    privacy: privacySettings.value
  }));
}, { deep: true });
</script>

<style scoped>
/* Custom animations */
input:focus, select:focus {
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

button {
  transition: all 0.2s ease;
}

button:active {
  transform: scale(0.98);
}
</style>