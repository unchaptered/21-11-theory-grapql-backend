# 21-11-thoery-graphql-backend

아래 강의에서 진행한 코드 내용
[강의기반](https://nomadcoders.co/graphql-for-beginners/lobby)

Git Repository
[21-11-theory-graphql-backend](https://github.com/unchaptered/21-11-theory-grapql-backend)

## GraphQL

### Problems

Graph QL 은 다음의 문제에 대한 해결 방안을 제시해줄 수 있다.

1. Over-fetching
2. Under-fetching

#### over-fetching

> 쓸모 없는 정보도 받았다!

만약 당신이 한 페이지에서는 간이정보만을 보여주고 싶고
클릭을 하면 유저의 상세정보를 보여주고 싶다면 어떻게 해야할까?

express를 예로 들면,
당신은 간이정보만을 보고 싶어도 해당 유저의 모든 저옵를 받아야 할 것이다.
이것이 바로 [over-fetching]이다.

#### under-fetching

> GET request 를 많이 해야한다.

만약 당신이 한 페이지 안에서 다양한 종류의 기능 혹은 Data 가 필요하면 어떻게 해야할까?

express를 예로 들면,
당신은 그 모든 사항에 대해서 각각 한 개 이상의 GET reqeust 를 보내야 할 것이다.
이것이 바로 [under-fetching]이다.

### Solutions of Problems

1. GraphQL Query

```javascript
query:{
    feed {
        comments,
        likeNumber
    },
    notifications {
        isRead
    },
    user {
        username,
        profilePic
    },
}
```

2. Vanilla JS

```javascript
{
    feed: [
        {
            comments: 1,
            likeNumber: 20,
        },
    ],
    notifications:[
        {
            isRead: true,
        }
    ];
    user: {
        username: "Uncahptered",
        profile: "http:"
    }
}
```

## DB

### Query (받기)

### Mutation (변형)
