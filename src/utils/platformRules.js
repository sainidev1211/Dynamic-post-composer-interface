// Platform-specific rules for content validation
export const platformRules = {
    twitter: {
        characterLimit: 280,
        hasHashtagLimit: true,
        hashtagLimit: 10,
        restrictUrls: false,
        mediaRules: {
            maxImages: 4,
            maxVideos: 1
        }
    },
    instagram: {
        characterLimit: 2200,
        hasHashtagLimit: true,
        hashtagLimit: 30,
        restrictUrls: true,
        mediaRules: {
            maxImages: 10,
            maxVideos: 1
        }
    },
    facebook: {
        characterLimit: 63206,
        hasHashtagLimit: false,
        hashtagLimit: null,
        restrictUrls: false,
        mediaRules: {
            maxImages: 20,
            maxVideos: 1
        }
    },
    linkedin: {
        characterLimit: 3000,
        hasHashtagLimit: true,
        hashtagLimit: 5,
        restrictUrls: false,
        mediaRules: {
            maxImages: 20,
            maxVideos: 1
        }
    },
    tiktok: {
        characterLimit: 2200,
        hasHashtagLimit: true,
        hashtagLimit: 50,
        restrictUrls: false,
        mediaRules: {
            maxImages: 0,
            maxVideos: 1
        }
    }
}